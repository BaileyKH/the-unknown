import { useState } from "react";

export const Footer = () => {

    const year = new Date().getFullYear();
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        setEmail("")
    }

    return(
        <div className="bg-lime-500 dark:bg-orange-600 mt-4 md:mt-8 py-4">
            <div className="flex flex-col items-center mb-8 py-4 md:py-8">
                <div>
                    <p className="font-bold text-sm md:text-lg tracking-wide text-color dark:text-black mb-2">Newsletter</p>
                </div>
                <div className="flex">
                    <input
                        type="email"
                        id="newsletter"
                        placeholder="your@email"
                        className="bg-black/15 text-color dark:text-black border-2 rounded-md placeholder:text-white/60 px-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" onClick={handleSubmit} className="text-sm md:text-base text-color dark:text-black bg-white rounded-md shadow-lg active:shadow-none ml-2 py-1 px-2">Subscribe</button>
                </div>
            </div>
            <div className="flex justify-center my-6 md:my-10">
                <p className="footer-nav">About</p>
                <p className="footer-nav">FAQs</p>
                <p className="footer-nav">News</p>
                <p className="footer-nav">Careers</p>
                <p className="footer-nav">Contact Us</p>
            </div>
            <div className="flex justify-center">
                <p className="text-color text-xs md:text-base dark:text-black">{`© ${year} BaileyKH. All Rights Reserved.`}</p>
            </div>
        </div>
    );
}