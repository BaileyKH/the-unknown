import React from "react";
import heroImg from '/src/assets/images/day-hero.svg'

export const Home = () => {
    return(
        <div className="bg-bgLight">
            <div>
                <div>
                    <img src={heroImg} className="inset-0 bg-black bg-opacity-50"/>
                </div>
            </div>
            <h1>Body Test</h1>
        </div>
    );
}