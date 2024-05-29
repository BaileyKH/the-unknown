import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";


import { DarkModeContext } from "./Layout";

import { IconMenu2, IconShoppingCart } from '@tabler/icons-react';

export const Nav = () => {

    const [mobile, setMobile] = useState(false)
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return(
        <div className={`${darkMode && "dark"}`}>
            <div className="h-16 md:h-20 px-2 md:px-4 flex items-center justify-between background drop-shadow-lg">
                <Link to="/" className="font-jaini text-3xl md:text-4xl text-color">The Unknown</Link>
                <nav className="px-2">
                    <div className="hidden md:flex items-center justify-center">
                        <NavLink to="/gear" className={({isActive}) => (isActive ? "active" : "nav-link")}>Camping Gear</NavLink>
                        <NavLink to="/grounds" className={({isActive}) => (isActive ? "active" : "nav-link")}>Campgrounds</NavLink>
                        <IconShoppingCart stroke={1.5} className="mr-8 pr-8 w-14 text-color border-primaryBrown border-r dark:border-neutral-100"/>
                        <img onClick={toggleDarkMode} src={darkMode ? "/src/assets/images/dark-lantern.svg" : "/src/assets/images/light-lantern.svg"} 
                            className="w-10 cursor-pointer bg-[#ca8a04] dark:bg-[#44403c] rounded-full drop-shadow"
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        />
                    </div>
                    <div className="md:hidden">
                        <IconMenu2 stroke={2} className="text-color"/>
                    </div>
                </nav>
            </div>
        </div>
    );
}
