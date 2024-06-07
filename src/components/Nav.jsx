import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { DarkModeContext } from "./Layout";
import { useCart } from '/src/components/CartContext.jsx';
import { IconMenu2, IconShoppingCart } from '@tabler/icons-react';

export const Nav = () => {
    const [mobile, setMobile] = useState(false);
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { cart } = useCart()

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    function toggleMobileNav() {
        setMobile(prevMobile => !prevMobile);
    }

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="w-full h-16 md:h-20 px-2 md:px-4 flex items-center justify-between border-b-2 border-lime-500 dark:border-orange-600">
                <Link to="/" className="font-jaini text-3xl md:text-4xl text-color">The Unknown</Link>
                <nav className="relative px-2">
                    <div className="hidden md:flex items-center justify-center">
                        <NavLink to="/gear" className={({ isActive }) => (isActive ? "active" : "nav-link")}>Camping Gear</NavLink>
                        <NavLink to="/grounds" className={({ isActive }) => (isActive ? "active" : "nav-link")}>Campgrounds</NavLink>
                        <div className="w-fit relative">
                            <Link to="/cart"><IconShoppingCart stroke={1.5} className="mr-8 pr-8 w-14 text-color border-primaryBrown border-r dark:border-neutral-100" /></Link>
                            {totalItems > 0 ? <p className="absolute -top-3 left-4 text-black bg-yellow-300 drop-shadow-2xl rounded-full px-2">{totalItems}</p> : null}
                        </div>
                        <img onClick={toggleDarkMode} src={darkMode ? "/src/assets/images/dark-lantern.svg" : "/src/assets/images/light-lantern.svg"} 
                            className="w-10 cursor-pointer bg-[#ca8a04] dark:bg-[#44403c] rounded-full drop-shadow"
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        />
                    </div>
                    <div className="md:hidden">
                        <IconMenu2 stroke={2} onClick={toggleMobileNav} className="text-color cursor-pointer" />
                        <div
                            className={`fixed top-14 right-0 h-fit w-2/4 max-w-xs text-center rounded-bl-md bg-bgLight dark:bg-bgDark shadow-lg transform ${
                                mobile ? 'translate-x-0' : 'translate-x-full'
                            } transition-transform duration-300 ease-in-out z-50`}
                        >
                            <nav className="py-4 flex flex-col space-y-4 items-center">
                                <Link to="/" onClick={toggleMobileNav} className="text-color">Home</Link>
                                <Link to="/gear" onClick={toggleMobileNav} className="text-color">Camping Gear</Link>
                                <Link to="/grounds" onClick={toggleMobileNav} className="text-color">Campgrounds</Link>
                                <div className="relative w-min">
                                    <Link to="/cart" onClick={toggleMobileNav}><IconShoppingCart stroke={1.5} className="w-6 h-6  mx-auto text-color" /></Link>
                                    {totalItems > 0 ? <p className="absolute -top-3 left-4 text-black bg-yellow-300 drop-shadow-2xl rounded-full px-2">{totalItems}</p> : null}
                                </div>
                                <img onClick={toggleDarkMode} src={darkMode ? "/src/assets/images/dark-lantern.svg" : "/src/assets/images/light-lantern.svg"} 
                                    className="w-10 mx-auto cursor-pointer bg-[#ca8a04] dark:bg-[#44403c] rounded-full drop-shadow"
                                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                                />
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
