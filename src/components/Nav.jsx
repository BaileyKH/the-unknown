import { useState } from "react";
import { useDarkMode } from "./Layout";
import { IconMenu2 } from '@tabler/icons-react';

export const Nav = () => {

    const [mobile, setMobile] = useState(false)
    const { darkMode, toggleDarkMode } = useDarkMode()

    return(
        <div className={darkMode ? "dark" : "bg-bgLight"}>
            <div className="h-16 flex items-center justify-between dark:bg-bgDark">
                <h1 className="font-jaini text-3xl px-2 text-primaryBrown dark:text-white">The Unknown</h1>
                <nav className="px-2">
                    <div className="md:hidden">
                        <IconMenu2 onClick={toggleDarkMode} stroke={2} className="text-primaryBrown dark:text-white"/>
                    </div>
                </nav>
            </div>
        </div>
    );
}