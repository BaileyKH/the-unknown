import { Link, useOutletContext } from "react-router-dom";

import { IconExclamationMark } from '@tabler/icons-react';

import { ProductBanner } from "../components/ProductBanner";

import heroImg from '/src/assets/images/day-hero.svg'
import darkHero from '/src/assets/images/hero-night.svg'
import lightBag from '/src/assets/images/backpack-light.svg'
import darkBag from '/src/assets/images/backpack-dark.svg'
import lTable from '/src/assets/images/table-light.svg'
import dTable from '/src/assets/images/table-dark.svg'
import { Trending } from "../components/Trending";


export const Home = () => {

    const { darkMode } = useOutletContext();

    return(
        <div className={`${darkMode && "dark"}`}>
            <div className="w-full">
                <div className="flex items-center justify-center">
                    <img src={darkMode ? darkHero : heroImg} 
                        alt={darkMode ? "Spooky forest with tent" : "Sunny forest with tent"}
                    />
                    <div className="absolute bg-white/90 dark:bg-black/90 rounded-md px-4 md:px-8 py-4 mx-4 drop-shadow-2xl">
                        <IconExclamationMark stroke={2} className="absolute -left-2 -top-2 text-black bg-yellow-300 drop-shadow-2xl rounded-full"/>
                        <h1 className="text-color text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
                            Adventure into the Unknown
                        </h1>
                        <p className="text-color text-lg lg:text-xl mt-2">
                            Keep exploring with all the latest gear from the brands you love!
                        </p>
                        <Link to="/gear">
                            <button className="mt-6 bg-lime-500 dark:bg-amber-700 rounded-md text-color font-bold lg:text-lg px-4 py-2 tracking-wide">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mx-8 md:mx-16">
                    <Trending />
                </div>
                <ProductBanner 
                    light={lightBag}
                    dark={darkBag}
                    alt={"camping backpack"}
                />
                <br></br>
                <ProductBanner 
                    light={lTable}
                    dark={dTable}
                    alt={"camping picnic table"}
                />
            </div>
        </div>
    );
}