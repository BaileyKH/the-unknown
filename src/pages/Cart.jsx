import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '/src/components/CartContext.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cart = () => {
  const { cart, clearCart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate()
  const to = location.state?.to || "/"

  const notify = () => toast(`💼 Thank you for your order!`);

  function handleCheckout() {
    notify()
    setTimeout(() => {
        clearCart()
        navigate(to, { replace: true })
    }, 2001)
  }

  return (
    <div className="mx-8 md:mx-16 my-4 md:my-8">
      <h1 className="text-2xl font-bold text-color underline underline-offset-8 mb-4">Shopping Cart</h1>
      <div className="flex flex-col">
        {cart.length === 0 ? (
            <p className="text-color">Your cart is empty</p>
        ) : (
            cart.map(item => (
            <div key={item.id} className="flex flex-col md:flex-row justify-between my-4 p-4 rounded-md bg-lime-500 dark:bg-[#1c1c1c]">
                <div className='flex flex-col md:flex-row'>
                    <img src={item.img} alt={item.item} className="rounded-md w-72" decoding="async"/>
                    <div className="flex flex-col mx-0 md:mx-4">
                        <h2 className="text-color underline underline-offset-4 mt-2 md:mt-0">{item.brand}</h2>
                        <p className="font-bold text-xl text-color mt-2">{item.item}</p>
                        <div className="flex mt-6 md:mt-12">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                                    min="1"
                                    max="10"
                                    className="w-12 text-center no-spin bg-transparent text-sm md:text-base text-color border-2 border-black/40 dark:border-white/60 rounded-md mr-2 py-1 px-2"
                                />
                                <button onClick={() => removeFromCart(item.id)} className="text-white dark:text-orange-600 font-bold">Remove</button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-color underline underline-offset-4 mb-2">Price</p>
                    <p className="text-color ">{item.price}</p>
                </div>
            </div>
            ))
        )}
        <div className="flex flex-col my-4 px-4 py-4 bg-lime-500 dark:bg-[#1c1c1c] rounded-md">
            <h3 className="text-color underline underline-offset-4 mb-2">Order Summary</h3>
            <div className="flex justify-between">
                <p className="text-color">Subtotal</p>
                <p className="text-color">${totalPrice}</p>
            </div>
            <div className="flex justify-between my-1">
                <p className="text-color">Standard Shipping</p>
                <p className="text-color">FREE</p>
            </div>
            <div className="flex justify-between">
                <p className="text-color">Estimated Tax</p>
                <p className="text-color">---</p>
            </div>
            <div className="flex justify-between mt-6">
                <p className="text-lg font-bold text-color">Total</p>
                <p className="text-lg font-bold text-color">${totalPrice}</p>
            </div>
            <div className="flex justify-between mt-6">  
                <p></p>
                <button onClick={handleCheckout} className="text-color font-bold tracking-wide bg-white dark:bg-orange-600 px-2 py-2 w-fit rounded-md">Check Out</button>
            </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={2000}
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
  );
};

