import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

import { gearData } from "/src/GearData.js";
import { Trending } from "/src/components/Trending.jsx";
import { useCart } from "/src/components/CartContext.jsx";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CampingGearDetail = () => {
    const [gearItem, setGearItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const location = useLocation();
    const { addToCart } = useCart();

    const maxQuantity = 10;

    useEffect(() => {
        const gearItems = gearData();
        const selectedGear = gearItems.find(
            (gear) => gear.id === parseInt(id, 10)
        );
        setGearItem(selectedGear);
    }, [id]);


    const handleIncrease = useCallback(() => {
        setQuantity(prevQuantity => prevQuantity < maxQuantity ? prevQuantity + 1 : prevQuantity);
    }, [maxQuantity]);


    const handleDecrease = useCallback(() => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : prevQuantity);
    }, []);


    const handleChange = useCallback((e) => {
        const val = parseInt(e.target.value, 10);
        if (!isNaN(val) && val <= maxQuantity && val >= 1) {
            setQuantity(val);
        }
    }, [maxQuantity]);


    const addItemToCart = useCallback(() => {
        return addToCart({ ...gearItem, quantity });
    }, [addToCart, gearItem, quantity]);


    const notify = useCallback(() => toast(`💼 Item added to cart!`), []);

    const gearItemMemo = useMemo(() => gearItem, [gearItem]);

    if (!gearItemMemo) return <div>Loading...</div>;

    const search = location.state?.search || "";
    const category = location.state?.category || "all";

    
    return (
        <section className="mx-8 md:mx-16 my-4 md:my-8">
            <Link to={`..${search}`} relative="path" className="text-color">
                &larr; Back to {category}
            </Link>
            <div className="flex flex-col md:flex-row mt-2">
                <div className="md:w-1/2">
                    <img
                        src={gearItemMemo.img}
                        alt={gearItemMemo.item}
                        className="rounded-lg w-full"
                        width="605px"
                        height="340px"
                        decoding="async"
                    />
                </div>
                <div className="md:w-1/2 flex justify-between md:justify-normal items-start mt-4 md:mt-0 md:flex-col px-2 md:px-8">
                    <div>
                        <p className="text-color dark:text-orange-600 underline underline-offset-4">
                            {gearItemMemo.brand}
                        </p>
                        <p className="text-color text-lg md:text-2xl font-bold mt-1 mb-4">
                            {gearItemMemo.item}
                        </p>
                        <p className="text-color text-sm md:text-xl font-bold">
                            ${gearItemMemo.price}
                        </p>
                    </div>
                    <div>
                        <div className="md:mt-16">
                            <p className="text-color text-sm md:text-base underline underline-offset-4 pb-2">
                                Quantity
                            </p>
                            <button
                                onClick={handleDecrease}
                                disabled={quantity === 1}
                                className="quantity-btn"
                            >
                                -
                            </button>
                            <input
                                id="quantity"
                                type="number"
                                value={quantity}
                                onChange={handleChange}
                                min="1"
                                max={maxQuantity}
                                className="no-spin bg-transparent text-sm md:text-base text-color text-center border-2 border-black/40 dark:border-white/60 rounded-md mx-2 py-1 px-2"
                            />
                            <button
                                onClick={handleIncrease}
                                disabled={quantity === maxQuantity}
                                className="quantity-btn"
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() => {addItemToCart(); notify();}}
                            className="md:text-left mt-4 text-color font-bold text-lg md:text-xl bg-lime-500 dark:bg-orange-600 w-max py-1 md:py-2 px-2 md:px-4 rounded-md shadow-lg active:shadow-none"
                        >
                            Add to Cart
                        </button>
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable
                            pauseOnHover={false}
                            theme="dark"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white/60 dark:bg-white/30 rounded-md mt-12">
                <p className="text-color font-bold text-sm md:text-lg text-center leading-loose tracking-wider drop-shadow-md p-4 md:p-8">
                    {gearItemMemo.description}
                </p>
            </div>
            <Trending />
        </section>
    );
};