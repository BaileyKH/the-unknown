import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

import lightPark from '/src/assets/images/park-light.webp'
import darkPark from '/src/assets/images/park-dark.webp'
import tent from '/src/assets/images/tent-icon.svg'
import { CampgroundList } from "../../components/CampgroundList";

export const Campgrounds = () => {

    const { darkMode } = useOutletContext();

    return (
        <section className="mx-8 ">
            <div className="flex items-center justify-center ">
                <img src={darkMode ? darkPark : lightPark} width="1273px" height="716px" className="rounded-b-xl w-full" decoding="async" alt="3d rendered forrest"/>
                <div className="absolute bg-white/90 dark:bg-black/90 mx-16 px-4 py-2 md:px-8 md:py-4 rounded-md drop-shadow-2xl">
                    <img src={tent} className="absolute -left-2 -top-2 p-1 text-black bg-yellow-300 drop-shadow-2xl rounded-full" alt="small tent icon" decoding="async"/>
                    <h1 className="text-color text-xl text-center md:text-4xl lg:text-6xl font-bold drop-shadow-md">
                        Find the perfect spot
                    </h1>
                    <p className="text-color text-base text-center lg:text-xl mt-2 md:mt-6">
                        Search for campgrounds in your area, or venture out and find a new favorite!
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center my-6 md:my-8 bg-primaryBrown/80 dark:bg-[#1c1c1c] rounded-md pt-8 space-x-4">
                <h2 className="text-white font-bold text-2xl md:text-3xl bg-lime-500 dark:bg-purple-900/50 rounded-md px-2 py-1 md:px-4 md:py-2">
                    Search for Campgrounds
                </h2>
                <CampgroundList />
            </div>
        </section>
    );
}