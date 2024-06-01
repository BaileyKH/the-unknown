import { useState, useEffect } from "react";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";

import { getCampgrounds } from '/src/api.js'
import { Loading } from "./Loading";

export const CampgroundList = () => {

    const { darkMode } = useOutletContext();

    // const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const initialState = searchParams.get('state') || 'co';

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
        <div key={ground.id} className="flex flex-col max-w-[300px] bg-white bg-gradient-to-t from-white via-lime-700 to-lime-700/50 via-[50%] dark:bg-black dark:bg-gradient-to-t dark:from-black dark:via-purple-900 dark:to-purple-900/50 rounded-md m-4 md:m-10 shadow-lg border-2 border-primaryBrown/50 dark:border-white/30 border-solid">
            <Link to={ground.id}>
                {ground.images && ground.images.length > 0 ? (
                    <img src={ground.images[0].url} className="w-full h-[300px] object-cover rounded-t-md" alt={ground.images[0].altText}/>
                ) : (
                    <img src="/src/assets/images/Image-Unavailable.svg" className="w-full h-[300px] object-cover rounded-t-md" alt="Image not available"/>
                )}
                <div className="flex flex-col justify-between my-4 px-2">
                    <p className="text-color font-bold mb-4">{ground.name}</p>
                    {ground.fees[0] ? (
                        <div>
                            <p className="text-color"><span className="bg-lime-500 dark:bg-amber-700 rounded-md px-2 py-1">Cost per night:</span> ${ground.fees[0].cost}</p>
                        </div>
                    ) : (
                        <div>
                            <span className="text-color bg-lime-500 dark:bg-amber-700 rounded-md px-2 py-1">Price Unavailable</span>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    ));

    return (
            <div className={`${darkMode && "dark"}`}>
                <div className="my-6 md:my-8 flex items-center justify-center flex-col md:flex-row">
                    <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col md:flex-row">
                        <label htmlFor="search-txt" className="text-color text-center mb-2 md:mb-0 md:mr-2">Please Enter a State</label>
                        <input 
                            id="search-txt"
                            type="text"
                            placeholder="Example: NJ"
                            name="searchText"
                            value={inputValue}
                            onChange={handleChange}
                            className="rounded-md indent-1.5 px-2 py-1 dark:placeholder:text-black/60 bg-white/60 dark:bg-white/80 border border-slate-500/70"
                        />
                        <button type="submit" className="md:hidden bg-slate-600 rounded-md mt-3 px-2 py-1">Search</button>
                    </form>
                </div>
                <div className="flex items-center justify-start">
                    <p className="text-2xl font-bold text-color underline underline-offset-8 decoration-4">Campgrounds for:</p>
                    <p className="text-2xl text-color ml-4">{state.toUpperCase()}</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    {loading ? <Loading /> : groundEl}
                </div>
            </div>
    );
}