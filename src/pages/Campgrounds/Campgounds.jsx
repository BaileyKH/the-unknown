import React from "react";
import { useOutletContext } from "react-router-dom";

import lightPark from '/src/assets/images/park-light.svg'
import darkPark from '/src/assets/images/park-dark.svg'
import tent from '/src/assets/images/tent-icon.svg'

import { IconCampfire } from '@tabler/icons-react';

export const Campgrounds = () => {

    const { darkMode } = useOutletContext();

    return(
        <div className="mx-8">
            <div className="flex items-center justify-center">
                <img src={darkMode ? darkPark : lightPark} className="rounded-b-xl"/>
                <div className="absolute bg-white/90 dark:bg-black/90 mx-16 px-4 py-2 md:px-8 md:py-4 rounded-md drop-shadow-2xl">
                    <img src={tent} className="absolute -left-2 -top-2 p-1 text-black bg-yellow-300 drop-shadow-2xl rounded-full"/>
                    <h1 className="text-color text-2xl text-center md:text-4xl lg:text-6xl font-bold drop-shadow-md">
                        Find the perfect spot
                    </h1>
                    <p className="text-color text-lg text-center lg:text-xl mt-2 md:mt-6">
                        Search for campgrounds in your area, or venture out and find a new favorite!
                    </p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}