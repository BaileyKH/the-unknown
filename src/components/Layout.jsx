import { useState, createContext, useContext } from "react";

import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

const DarkModeContext = createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

export const Layout = () => {

    const [darkMode, setDarkMode] = useState(false) 
    
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <div className={darkMode ? "dark" : ""}>
                <Nav />
                <main>
                    <Outlet />
                </main>
            </div>
        </DarkModeContext.Provider>
    );
}