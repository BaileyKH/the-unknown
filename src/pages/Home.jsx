import React from "react";

import { useDarkMode } from "/src/components/Layout.jsx";

import heroImg from '/src/assets/images/day-hero.svg'
import darkHero from '/src/assets/images/hero-night.svg'

export const Home = () => {

    const { darkMode } = useDarkMode()

    return(
        <div className="bg-bgLight dark:bg-bgDark w-full">
            <div className="w-full">
                <img src={darkMode ? darkHero : heroImg} className="w-full"/>
            </div>
            <h1>Body Test</h1>
        </div>
    );
}