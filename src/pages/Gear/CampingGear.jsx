import React from "react";

// import heroImg from '/src/assets/images/gear-hero.jpg'

export const CampingGear = () => {
    return(
        <div>
            <div className="relative bg-[url('/src/assets/images/gear-hero.jpg')] bg-cover bg-center min-h-96 md:min-h-[550px]">
                <h1 className="absolute text-white text-center font-jaini w-full bottom-10 text-6xl tracking-wider ">
                    Camping Gear
                </h1>
            </div>
        </div>
    );
}