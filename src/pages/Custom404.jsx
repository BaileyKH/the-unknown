import React from "react";

import { Link, useOutletContext } from "react-router-dom";

import nfLight from '/src/assets/images/404-light.webp'
import nfDark from '/src/assets/images/404-dark.webp'

export const Custom404 = () => {

    const { darkMode } = useOutletContext();

    return(
        <section className={`${darkMode && "dark"}`}>
            <div className="flex h-screen justify-center">
                <div className="w-full">
                    <img src={darkMode ? nfDark : nfLight} className="w-full" decoding="async"/>
                </div>
                <div className="absolute w-full md:w-2/5 md:right-0 flex flex-col justify-center items-center my-4 md:my-40 md:mr-4 md:px-4 py-2 md:py-4 rounded-lg text-center bg-white/80 shadow-xl">
                    <h1 className="text-black font-jaini text-6xl md:text-9xl drop-shadow-xl">404</h1>
                    <p className="text-xl md:text-4xl text-black font-jaini tracking-wide drop-shadow-xl">Oh no, are you lost Adventurer?</p>
                    <p className="text-xs md:text-xl text-black my-2 md:my-4">The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.</p>
                    <Link to="/" className="bg-bgLight dark:bg-bgDark text-color text-sm md:text-lg md:font-bold tracking-wide my-2 md:my-4 px-2 md:px-4 py-1 md:py-2 rounded-md">
                        Poof back Home
                    </Link>
                </div>
            </div>
        </section>
    );
}