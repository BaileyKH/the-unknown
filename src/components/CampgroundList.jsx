import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { getCampgrounds } from '/src/api.js'
import { Loading } from "./Loading";

export const CampgroundList = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const initialState = searchParams.get('state') || 'ca';

    const [grounds, setGrounds] = useState([])
    const [state, setState] = useState(initialState)
    const [inputValue, setInputValue] = useState(initialState)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadGrounds() {
            setLoading(true)
            try {
                const data = await getCampgrounds(state)
                setGrounds(data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
                setInputValue("")
            }
        }

        loadGrounds()
    }, [state])

    function handleSubmit(event){
        event.preventDefault();
        setState(inputValue);
        setSearchParams({ state: inputValue });
    }

    function handleChange(event){
        setInputValue(event.target.value)
    }

    // Individual Campgrounds
    const groundEl = grounds.map(ground => (
        <div key={ground.id} className="flex flex-col max-w-[300px] bg-white/60 dark:bg-white/10 border dark:border-white/20 rounded-md m-4 md:m-10 shadow-lg transition-transform duration-300 ease-in-out will-change-transform origin-center hover:scale-110 cursor-pointer">
            <Link to={ground.id} >
                {ground.images && ground.images.length > 0 ? (
                    <img src={ground.images[0].url} className="w-full h-[300px] object-cover rounded-t-md" alt={ground.images[0].altText} decoding="async"/>
                ) : (
                    <img src="/src/assets/images/Image-Unavailable.webp" width="300px" height="300px" className="w-full object-cover rounded-t-md" alt="Image not available" decoding="async"/>
                )}
                <div className="flex flex-col justify-between my-4 px-2">
                    <p className="text-color font-bold mb-4">{ground.name}</p>
                    {ground.fees[0] ? (
                        <div>
                            <p className="text-color"><span className="bg-lime-500 dark:bg-orange-600 rounded-md px-2 py-1">Cost per night:</span> ${ground.fees[0].cost}</p>
                        </div>
                    ) : (
                        <div>
                            <span className="text-color bg-lime-500 dark:bg-orange-600 rounded-md px-2 py-1">Price Unavailable</span>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    ));

    return (
            <div>
                <div className="my-6 md:my-8 flex items-center justify-center flex-col md:flex-row">
                    <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col md:flex-row">
                        <label htmlFor="search-txt" className="text-lime-500 dark:text-white text-center mb-2 md:mb-0 md:mr-2">Please Enter a State:</label>
                        <input 
                            id="search-txt"
                            type="text"
                            placeholder="Example: NJ"
                            name="searchText"
                            value={inputValue}
                            onChange={handleChange}
                            className="rounded-md indent-1.5 px-2 py-1 placeholder:text-black/50 dark:placeholder:text-black/60 bg-white/60 dark:bg-white/80 border border-slate-500/70"
                        />
                        <button type="submit" className="md:hidden bg-slate-600 rounded-md mt-3 px-2 py-1">Search</button>
                    </form>
                </div>
                <div className="flex items-center justify-start">
                    <p className="text-2xl font-bold text-lime-500 dark:text-white underline underline-offset-8 decoration-4">Campgrounds for:</p>
                    <p className="text-2xl text-lime-500 dark:text-white ml-4">{state.toUpperCase()}</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    {loading ? <Loading /> : groundEl}
                </div>
            </div>
    );
}