import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

import { getCampground } from "../../api";

import lCampfire from '/src/assets/images/campfire-light.svg'
import dCampfire from '/src/assets/images/campfire-dark.svg'
import unavailable from '/src/assets/images/Image-Unavailable.svg'

import { IconSun, IconCurrencyDollar, IconTent, IconLocation, IconToiletPaper } from '@tabler/icons-react';

export const CampgroundDetail = () => {

    const { darkMode } = useOutletContext()

    const [groundsDetails, setGroundsDetails] = useState(null)
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadGround() {
            setLoading(true)
            try {
                const data = await getCampground(id)
                setGroundsDetails(data[0])
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        loadGround()
    },[id])


    return(
        <div className={`${darkMode && "dark"}`}>
                {groundsDetails && (
                    <div className="mx-8">
                        <img src={groundsDetails.images[0].url ? groundsDetails.images[0].url : unavailable} className="rounded-b-xl w-full"/>
                        <div className="flex flex-col items-center justify-center mt-4 md:mt-8 mb-2 md:mb-4 camp-card">
                            <div className="flex flex-row">
                                <img src={darkMode ? dCampfire : lCampfire} className="w-6 md:w-12 drop-shadow-lg"/>
                                <h1 className="text-lg md:text-4xl font-bold text-color text-center mx-2 drop-shadow-lg">{groundsDetails.name}</h1>
                                <img src={darkMode ? dCampfire : lCampfire} className="w-6 md:w-12 drop-shadow-lg"/>
                            </div>
                            <p className="text-color text-xs md:text-lg md:px-4 mt-2 md:mt-4 text-center">{groundsDetails.description}</p>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <div className="camp-card relative">
                                <IconSun stroke={2} className="camp-card-icon"/>
                                <p className="campground-text"><span className="campground-span">Weather</span> {groundsDetails.weatherOverview ? groundsDetails.weatherOverview : "No Weather Available"}</p>
                            </div>

                            <div className="camp-card relative">
                                <IconTent stroke={2} className="camp-card-icon"/>
                                <p className="campground-text"><span className="campground-span">Total campsites</span> {groundsDetails.campsites.totalSites ? groundsDetails.campsites.totalSites : "Available site details unavailable"}</p>
                            </div>

                            <div className="camp-card relative">
                                <span className="campground-span">Fees</span>
                                <IconCurrencyDollar stroke={2} className="camp-card-icon"/>
                                {groundsDetails.fees.map(detail => (
                                    <div>
                                        <p className="campground-text underline underline-offset-4 mt-4 md:mt-6">{detail.title}</p>
                                        <p className="campground-text mt-1 md:mt-2">${detail.cost}</p>
                                        <p className="campground-text mt-1 md:mt-2">{detail.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="camp-card relative">
                                <IconToiletPaper stroke={2} className="camp-card-icon"/>
                                <span className="campground-span">Amenities</span>
                                <p className="campground-text mt-4 md:mt-6">Restroom: {groundsDetails.amenities.toilets}</p>
                                <p className="campground-text mt-2 md:mt-4">Showers: {groundsDetails.amenities.showers}</p>
                                <p className="campground-text mt-4">Firewood for sale: {groundsDetails.amenities.firewoodForSale}</p>
                            </div>

                            <div className="camp-card relative">
                                <IconLocation stroke={2} className="camp-card-icon"/>
                                <span className="campground-span">Directions</span>
                                <p className="campground-text mt-4 md:mt-6">Address: {groundsDetails.addresses[0] ? `${groundsDetails.addresses[0].line1} ${groundsDetails.addresses[0].city},${groundsDetails.addresses[0].stateCode} ${groundsDetails.addresses[0].postalCode}` : "Address not Available"}</p>
                                <p className="campground-text mt-2 md:mt-4">{groundsDetails.directionsOverview}</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <a href={groundsDetails.reservationUrl} target="_blank" className="mt-10 md:mt-16 px-4 md:px-8 py-2 md:py-4 font-bold text-xl md:text-2xl text-color bg-lime-500 dark:bg-amber-700/60 rounded-lg shadow-lg transition-shadow ease-linear active:shadow-none">
                                    Book Now!
                                </a>
                                <p className="text-xs text-center md:text-sm text-color mt-4 md:mt-6">{groundsDetails.regulationsOverview}</p>
                            </div>
                        </div>
                        
                    </div>
                )}
        </div>
    );
}

// Reservation Stuff:
// .reservationUrl
// .regulationsOverview