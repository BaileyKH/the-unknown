import { Link, useOutletContext } from "react-router-dom";

import { IconExclamationMark } from '@tabler/icons-react';

// import { DarkModeContext } from "../components/Layout.jsx";

import heroImg from '/src/assets/images/day-hero.svg'
import darkHero from '/src/assets/images/hero-night.svg'

export const Home = () => {

    const { darkMode } = useOutletContext();

    return(
        <div className={`${darkMode && "dark"}`}>
            <div className="background w-full">
                <div className="flex items-center justify-center">
                    <img src={darkMode ? darkHero : heroImg} 
                        alt={darkMode ? "Spooky forest with tent" : "Sunny forest with tent"}
                    />
                    <div className="absolute bg-white/90 dark:bg-black/90 rounded-md px-4 md:px-8 py-4 mx-4 drop-shadow-2xl">
                        <IconExclamationMark stroke={2} className="absolute -left-2 -top-2 text-black bg-yellow-300 drop-shadow-2xl rounded-full"/>
                        <h1 className="text-color text-2xl md:text-4xl font-bold drop-shadow-md">Adventure into the Unknown</h1>
                        <p className="text-color text-lg mt-2">Keep venturing with all the latest gear from your favorite brands!</p>
                        <Link className="">Shop Now</Link>
                    </div>
                </div>
                <h1>Body</h1>
            </div>
        </div>
    );
}