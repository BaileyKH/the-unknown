import { useContext } from "react";

import { DarkModeContext } from "./Layout";

export const Footer = () => {

    const { darkMode } = useContext(DarkModeContext)

    return(
        <div className={`${darkMode && "dark"}`}>
            <div className="h-20 bg-bgLight dark:bg-bgDark"></div>
        </div>
    );
}