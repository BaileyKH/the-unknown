import React from "react";
import { useOutletContext } from "react-router-dom";

import { gearData } from "/src/GearData.js";

export const CampingGear = () => {

    const { darkMode } = useOutletContext()

    const gearList= gearData()

    return(
        <div className={`${darkMode && "dark"}`}>
            <div className="relative bg-[url('/src/assets/gear/gear-hero.jpg')] bg-cover bg-center min-h-96 md:min-h-[550px]">
                <h1 className="absolute text-lime-600 dark:text-white text-center font-jaini w-full -bottom-6 md:-bottom-12 text-6xl md:text-9xl tracking-wider drop-shadow-xl">
                    Camping Gear
                </h1>
            </div>
            <div className="my-10 md:my-20 mx-4 md:mx-10">
                <div className="w-4/5 md:w-1/2 mx-auto text-center">
                    <p className="text-sm md:text-base text-primaryBrown/70 dark:text-white/70">Different tents for different needs. The coziest sleeping gear just for you. Kitchen essentials. Why wait? Go explore.</p>
                </div>
                {gearList.map(gear => (
                    <div key={gear.id}>
                        <p className="text-color">{gear.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}