import { useMemo } from "react";
import { Link, useOutletContext } from "react-router-dom";

import { IconExclamationMark } from '@tabler/icons-react';

import { ProductBanner } from "../components/ProductBanner";

import heroImg from '/src/assets/images/day-hero.svg'
import darkHero from '/src/assets/images/hero-night.svg'
import lightBag from '/src/assets/images/backpack-light.svg'
import darkBag from '/src/assets/images/backpack-dark.svg'
import lTable from '/src/assets/images/table-light.svg'
import dTable from '/src/assets/images/table-dark.svg'

import tent from '/src/assets/categories/tent.svg'
import bag from '/src/assets/categories/backpack.svg'
import sleep from '/src/assets/categories/sleeping-bag.svg'
import stove from '/src/assets/categories/stove.svg'
import shirt from '/src/assets/categories/shirt.svg'

import tentB1 from '/src/assets/categories/tent-b1.jpg'
import tentB2 from '/src/assets/categories/tent-b2.jpg'

import explore from '/src/assets/categories/campgrounds.jpg'

import { Trending } from "../components/Trending";


export const Home = () => {
    const { darkMode } = useOutletContext();

    const heroImage = useMemo(() => (darkMode ? darkHero : heroImg), [darkMode]);
    const altText = useMemo(() => (darkMode ? "Spooky forest with tent" : "Sunny forest with tent"), [darkMode]);

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="w-full">
                <div className="flex items-center justify-center">
                    <img src={heroImage} alt={altText} />
                    <div className="absolute z-10 bg-white/90 dark:bg-black/90 rounded-md px-4 md:px-8 py-4 mx-4 drop-shadow-2xl">
                        <IconExclamationMark stroke={2} className="absolute animate-bounce -left-2 -top-2 text-black bg-yellow-300 drop-shadow-2xl rounded-full" />
                        <h1 className="text-color text-xl md:text-4xl lg:text-6xl font-bold drop-shadow-md">
                            Adventure into the Unknown
                        </h1>
                        <p className="text-color text-base lg:text-xl mt-2">
                            Keep exploring with all the latest gear from the brands you love!
                        </p>
                        <Link to="/gear">
                            <button className="mt-6 bg-lime-500 dark:bg-amber-700 rounded-md text-color font-bold lg:text-lg px-4 py-2 tracking-wide">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="my-10 md:my-20 mx-8 md:mx-16">
                    <h2 className="text-color text-lg md:text-2xl font-bold underline underline-offset-8 mb-3 md:mb-6">Find your perfect Tent</h2>
                    <div className="w-full flex gap-4">
                        <div className="w-1/2">
                            <img src={tentB1} className="rounded-lg"/>
                        </div>
                        <div className="w-1/2">
                            <img src={tentB2} className="rounded-lg"/>
                        </div>
                    </div>
                    <Link to="/gear?category=tent" className="flex justify-center items-center bg-lime-500 dark:bg-orange-600 py-2 text-lg md:text-xl font-bold tracking-wider text-color rounded-md mt-4 shadow-md active:shadow-none">Shop Tents</Link>
                </div>
                <div className="mx-8 md:mx-16">
                    <Trending />
                </div>
                <ProductBanner 
                    light={lightBag}
                    dark={darkBag}
                    title={"Get the best prices on new backpacks now!"}
                    link={"/gear?category=backpack"}
                    alt={"camping backpack"}
                />
                <div className="mx-8 md:mx-16 my-10 md:my-20">
                    <h2 className="text-color text-lg md:text-2xl font-bold underline underline-offset-8 mb-3 md:mb-6">Top Categories</h2>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-12">
                        <div>
                            <Link to="/gear?category=tent">
                                <img src={tent} className="top-cat-img" loading="lazy" alt="simple camping tent"/>
                                <p className="top-cat-text">Tents</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/gear?category=backpack">
                                <img src={bag} className="top-cat-img" loading="lazy" alt="simple camping backpack"/>
                                <p className="top-cat-text">Backpacks</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/gear?category=sleeping+bag'>
                                <img src={sleep} className="top-cat-img" loading="lazy" alt="simple camping sleeping bag"/>
                                <p className="top-cat-text">Sleeping Bags</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/gear?category=kitchen'>
                                <img src={stove} className="top-cat-img" loading="lazy" alt="simple camping kitchen stove"/>
                                <p className="top-cat-text">Kitchen</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/gear?category=clothes'>
                                <img src={shirt} className="top-cat-img" loading="lazy" alt="simple camping button up shirt"/>
                                <p className="top-cat-text">Clothes</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <br></br>
                <ProductBanner 
                    light={lTable}
                    dark={dTable}
                    title={"Latest in camping cookware!"}
                    link={"/gear?category=kitchen"}
                    alt={"camping picnic table"}
                />
                <div className="flex justify-center overflow-hidden h-80 w-full mt-8 md:mt-16">
                    <img src={explore} className="relative w-full object-cover brightness-50" loading="lazy" alt="camping tent overlooking beautiful mountain side"/>
                    <div className="absolute text-center mt-8 md:mt-4">
                        <h2 className="font-jaini text-white text-6xl md:text-9xl drop-shadow-2xl tracking-wide mb-12">Explore <span className="text-3xl md:text-6xl">the</span> Unknown</h2>
                        <Link to="/grounds" className="bg-black text-white px-6 py-3 rounded-md text-xl font-bold shadow-lg">Camp Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}