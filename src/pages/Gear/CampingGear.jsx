import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { gearData } from "/src/GearData.js";

export const CampingGear = () => {

    const [gearList, setGearList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const catFilter = searchParams.get("category")
    const displayedGear = catFilter ? gearList.filter(gear => gear.category === catFilter) : gearList

    useEffect(() => {
        const gearItems = gearData();
        setGearList(gearItems);
    }, []);

    // Camping gear elements with filter functionality
    const gearEl = displayedGear.map(gear => (
        <div key={gear.id}>
            <div className="flex flex-col justify-center items-start w-[350px] rounded-md bg-white/60 dark:bg-white/30 p-4">
                <Link to={`/gear/${gear.id}`} state={{search: `?${searchParams.toString()}`, category: catFilter}}>
                    <img src={gear.img} className="overflow-hidden rounded-t-md"/>
                    <p className="text-color font-bold text-xl tracking-wider mt-4">{gear.brand}</p>
                    <p className="text-color my-4">{gear.item}</p>
                    <p className="text-color">{gear.price}</p>
                </Link>
                <Link className="bg-white/85 font-bold tracking-wide text-color dark:text-black rounded-md py-2 px-4 mt-8 shadow-xl active:shadow-none">Add to Cart</Link>
            </div>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return(
        <div>
            <div className="relative bg-[url('/src/assets/gear/gear-hero.jpg')] bg-cover bg-center min-h-96 md:min-h-[550px]">
                <h1 className="absolute text-lime-600 dark:text-white text-center font-jaini w-full -bottom-6 md:-bottom-12 text-6xl md:text-9xl tracking-wider drop-shadow-xl">
                    Camping Gear
                </h1>
            </div>
            <div className="my-10 md:my-20 mx-4 md:mx-10">
                <div className="w-4/5 md:w-1/2 mx-auto text-center">
                    <p className="text-sm md:text-base text-primaryBrown/70 dark:text-white/70">Different tents for different needs. The coziest sleeping gear just for you. Kitchen essentials. Why wait? Go explore.</p>
                </div>
                <div className="flex justify-center items-center mt-10 w-full bg-primaryBrown/80 dark:bg-[#1c1c1c] rounded-t-md pt-8 space-x-4">
                    <button onClick={() => handleFilterChange("category", "tent")} className={`${catFilter === "tent" ? "selected" : "not-selected"}`}>tents</button>
                    <button onClick={() => handleFilterChange("category", "backpack")} className={`${catFilter === "backpack" ? "selected" : "not-selected"}`}>backpacks</button>
                    <button onClick={() => handleFilterChange("category", "sleeping bag")} className={`${catFilter === "sleeping bag" ? "selected" : "not-selected"}`}>sleeping bags</button>
                    <button onClick={() => handleFilterChange("category", "kitchen")} className={`${catFilter === "kitchen" ? "selected" : "not-selected"}`}>kitchen</button>
                    <button onClick={() => handleFilterChange("category", "clothes")} className={`${catFilter === "clothes" ? "selected" : "not-selected"}`}>clothes</button>
                    {catFilter ? (<button onClick={() => handleFilterChange("category", null)} className="text-color hover:underline hover:underline-offset-2">clear filter</button>) : null}
                </div>
                <div className="flex flex-wrap justify-center gap-10 bg-primaryBrown/80 dark:bg-[#1c1c1c] rounded-b-md mb-10 py-12">
                    {gearEl}
                </div>
            </div>
        </div>
    );
}