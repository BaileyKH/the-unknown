import React from "react";

import { useOutletContext, Link } from "react-router-dom";

export const ProductBanner = (props) => {
    const { darkMode } = useOutletContext();

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className="mx-auto md:px-5 max-w-full ">
                <div className="flex justify-between h-80 overflow-hidden mx-16 rounded-xl">
                    <div className="w-2/5 md:w-1/2 text-end">
                        <img src={darkMode ? props.dark : props.light} className="w-full h-full object-cover" alt={`3D image of a ${props.alt}`} loading="lazy" decoding="async"/>
                    </div>
                    <div className="flex flex-col justify-center items-center px-0 md:px-32 w-3/5 md:w-1/2 text-center md:text-start bg-yellow-100 dark:bg-zinc-600 text-color">
                        <div className="">
                            <h2 className="font-bold text-lg md:text-3xl">{props.title}</h2>
                            <p className="mt-4 mb-8 text-base md:text-xl">Only for a limited time!</p>
                            <Link
                                onClick={() => window.top(0, 0)}
                                to={props.link}
                            >
                                <button className="px-2 py-1 md:px-4 md:py-2 bg-lime-500 dark:bg-orange-600 font-bold rounded-md shadow-md active:shadow-none"> Shop now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
