import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gearData } from "/src/GearData.js";

export const CampingGearDetail = () => {
    const { id } = useParams();
    const [gearItem, setGearItem] = useState(null);

    useEffect(() => {
        const gearItems = gearData();
        const selectedGear = gearItems.find(gear => gear.id === parseInt(id, 10));
        setGearItem(selectedGear);
    }, [id]);

    if (!gearItem) return <div>Loading...</div>;

    return (
        <div className="product-details">
            <h1>{gearItem.brand}</h1>
            <img src={gearItem.img} alt={gearItem.item} />
            <p>{gearItem.item}</p>
            <p>{gearItem.description}</p>
            <p>{gearItem.price}</p>
        </div>
    );
}
