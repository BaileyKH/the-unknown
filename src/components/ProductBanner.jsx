import React from "react";

import { useOutletContext, Link } from "react-router-dom";

export const ProductBanner = (props) => {
    const { darkMode } = useOutletContext();

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="mx-auto md:px-5 max-w-max ">
                <div className="flex justify-between h-80 overflow-hidden mx-16 rounded-xl">
                    <div className="w-1/2 text-end">
                        <img src={darkMode ? props.dark : props.light} className="w-full h-full object-cover" alt={`3D image of a ${props.alt}`} />
                    </div>
                    <div className="flex flex-col justify-center items-center px-16 md:px-32 w-1/2 text-start bg-yellow-100 dark:bg-zinc-600 text-color">
                        <div className="text">
                            <h2>PRODUCT NAME</h2>
                            <p>PRODUCT INFO STUFF</p>
                            <Link
                                onClick={() => window.top(0, 0)}
                                to="/gear"
                            >
                                <button> Shop now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
