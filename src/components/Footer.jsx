import { useContext } from "react";

import { DarkModeContext } from "./Layout";

export const Footer = () => {

    const { darkMode } = useContext(DarkModeContext)

    const year = new Date().getFullYear();

    return(
        <div className="bg-lime-500 dark:bg-orange-600 mt-4 md:mt-8">
            <div className="flex justify-center">
                <p className="text-color text-xs md:text-base dark:text-bgDark">{`© ${year} BaileyKH. All Rights Reserved.`}</p>
            </div>
        </div>
    );
}