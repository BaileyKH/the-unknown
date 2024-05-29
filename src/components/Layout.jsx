import { useState, createContext, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const DarkModeContext = createContext();


export const Layout = () => {

    const initialDarkMode = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(initialDarkMode) 

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)

        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])
    
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