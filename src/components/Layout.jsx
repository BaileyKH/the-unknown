import { useState, createContext } from "react";

import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const DarkModeContext = createContext();


export const Layout = () => {

    const [darkMode, setDarkMode] = useState(false) 
    
    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return(
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <Nav />
            <main>
                <Outlet context={{ darkMode }}/>
            </main>
            <Footer />
        </DarkModeContext.Provider>
    );
}