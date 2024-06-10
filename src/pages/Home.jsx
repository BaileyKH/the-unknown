import { Link, useOutletContext } from "react-router-dom";

import { IconExclamationMark } from '@tabler/icons-react';

import { ProductBanner } from "../components/ProductBanner";

import heroImg from '/src/assets/images/day-hero.webp'
import darkHero from '/src/assets/images/hero-night.webp'
import lightBag from '/src/assets/images/backpack-light.webp'
import darkBag from '/src/assets/images/backpack-dark.webp'
import lTable from '/src/assets/images/table-light.webp'
import dTable from '/src/assets/images/table-dark.webp'

import tent from '/src/assets/categories/tent.webp'
import bag from '/src/assets/categories/backpack.webp'
import sleep from '/src/assets/categories/sleeping-bag.webp'
import stove from '/src/assets/categories/stove.webp'
import shirt from '/src/assets/categories/shirt.webp'

import tentB1 from '/src/assets/categories/tent-b1.webp'
import tentB2 from '/src/assets/categories/tent-b2.webp'

import explore from '/src/assets/categories/campgrounds.webp'

import { Trending } from "../components/Trending";


export const Home = () => {

    const { darkMode } = useOutletContext();

    return(
        <div className={`${darkMode && "dark"}`}>
            <div className="w-full">
                <div className="flex items-center justify-center">
                    <img src={darkMode ? darkHero : heroImg} 
                        width="1261" height="709"
                        alt={darkMode ? "Spooky forest with tent" : "Sunny forest with tent"}
                        className="w-full h-auto" 
                        decoding="async"
                    />
                    <div className="absolute z-10 bg-white/90 dark:bg-black/90 rounded-md px-4 md:px-8 py-4 mx-4 drop-shadow-2xl">
                        <IconExclamationMark stroke={2} className="absolute animate-bounce -left-2 -top-2 text-black bg-yellow-300 drop-shadow-2xl rounded-full"/>
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
                            <img src={tentB1} width="700" height="450" className="rounded-lg w-max-[700px] h-auto" alt="inside view of orange camping tent looking out into the forest" decoding="async"/>
                        </div>
                        <div className="w-1/2">
                            <img src={tentB2} width="700" height="450" className="rounded-lg w-max-[700px] h-auto" alt="beige camping tent surrounded by large trees in forest" decoding="async"/>
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
                                <img src={tent} className="top-cat-img" decoding="async" loading="lazy" alt="simple camping tent"/>
                                <p className="top-cat-text">Tents</p>
                            </Link>
                        </div>
                        <div>
                            <Link to="/gear?category=backpack">
                                <img src={bag} className="top-cat-img" alt="simple camping backpack" decoding="async" loading="lazy"/>
                                <p className="top-cat-text">Backpacks</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/gear?category=sleeping+bag'>
                                <img src={sleep} className="top-cat-img" alt="simple camping sleeping bag" decoding="async" loading="lazy"/>
                                <p className="top-cat-text">Sleeping Bags</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/gear?category=kitchen'>
                                <img src={stove} className="top-cat-img" alt="simple camping kitchen stove" decoding="async" loading="lazy"/>
                                <p className="top-cat-text">Kitchen</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='/gear?category=clothes'>
                                <img src={shirt} className="top-cat-img" alt="simple camping button up shirt" decoding="async" loading="lazy"/>
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
                    <img src={explore} width="1261" height="320" className="relative w-full h-auto object-cover brightness-50" loading="lazy" alt="camping tent overlooking beautiful mountain side" decoding="async"/>
                    <div className="absolute text-center mt-8 md:mt-4">
                        <h2 className="font-jaini text-white text-6xl md:text-9xl drop-shadow-2xl tracking-wide mb-12">Explore <span className="text-3xl md:text-6xl">the</span> Unknown</h2>
                        <Link to="/grounds" className="bg-black text-white px-6 py-3 rounded-md text-xl font-bold shadow-lg">Camp Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}