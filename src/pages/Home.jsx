import { useContext } from "react";

import { DarkModeContext } from "../components/Layout.jsx";

import heroImg from '/src/assets/images/day-hero.svg'
import darkHero from '/src/assets/images/hero-night.svg'

export const Home = () => {

    const { darkMode } = useContext(DarkModeContext);

    return(
        <div className={`${darkMode && "dark"}`}>
            <div className="background w-full">
                <div className="w-full">
                    <img src={darkMode ? darkHero : heroImg} className="w-full"/>
                </div>
                <h1>Body Test</h1>
            </div>
        </div>
    );
}