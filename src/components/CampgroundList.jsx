import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

import { getCampgrounds } from '/src/api.js'

export const CampgroundList = () => {

    const { darkMode } = useOutletContext();

    const [grounds, setGrounds] = useState([])
    const [state, setState] = useState('co')
    const [inputValue, setInputValue] = useState(state)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadGrounds() {
            setLoading(true)
            try {
                const data = await getCampgrounds(state)
                setGrounds(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadGrounds()
    }, [state])

    function handleSubmit(event){
        event.preventDefault();
        setState(inputValue);
        setInputValue("")
    }

    function handleChange(event){
        setInputValue(event.target.value)
    }

    if (loading){
        return <h1>Loading...</h1>
    }

    if (error){
        return <h1>There was an error: {error.message}</h1>
    }

    // Individual Campgrounds
    const groundEl = grounds.map(ground => (
        <div key={ground.id} className="flex flex-col max-w-[300px] bg-white/90 dark:bg-black/90 rounded-md m-4 md:m-8 shadow-lg border-2 border-primaryBrown/50 dark:border-white/30 border-solid">
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
        </div>
    ));

    return (
            <div className={`${darkMode && "dark"}`}>
                <div className="my-6 md:my-8 flex items-center justify-center flex-col md:flex-row">
                    <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col md:flex-row">
                        <label htmlFor="search-txt" className="text-color mb-2 md:mr-2">Please Enter a State</label>
                        <input 
                            id="search-txt"
                            type="text"
                            placeholder="Example: NJ"
                            name="searchText"
                            value={inputValue}
                            onChange={handleChange}
                            className="rounded-md indent-1.5 px-2 py-1"
                        />
                    </form>
                </div>
                <div className="flex flex-wrap justify-center">
                    {loading ? <h1>loading...</h1> : groundEl}
                </div>
            </div>
    );
}