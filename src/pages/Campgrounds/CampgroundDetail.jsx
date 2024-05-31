import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

import { getCampground } from "../../api";

import lCampfire from '/src/assets/images/campfire-light.svg'
import dCampfire from '/src/assets/images/campfire-dark.svg'
import unavailable from '/src/assets/images/Image-Unavailable.svg'

export const CampgroundDetail = () => {

    const { darkMode } = useOutletContext()

    const [groundsDetails, setGroundsDetails] = useState(null)
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        async function loadGround() {
            setLoading(true)
            try {
                const data = await getCampground(id)
                setGroundsDetails(data[0])
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadGround()
    },[id])

    

    return(
        <div className={`${darkMode && "dark"}`}>
            <div>
                {groundsDetails && (
                    <div>
                        <img src={groundsDetails.images[0].url ? groundsDetails.images[0].url : unavailable}/>
                        <div className="flex items-center justify-center">
                            <img src={darkMode ? dCampfire : lCampfire} className="w-12"/>
                            <h1 className="text-4xl font-bold text-color">{groundsDetails.name}</h1>
                            <img src={darkMode ? dCampfire : lCampfire} className="w-12"/>
                        </div>
                        <p>{groundsDetails.description}</p>
                        <p>Weather: {groundsDetails.weatherOverview}</p>

                        <p>Total campsites: {groundsDetails.campsites.totalSites}</p>

                        <h2>Fees</h2>
                        {groundsDetails.fees.map(detail => (
                            <div key={groundsDetails.id}>
                                <p>{detail.title}</p>
                                <p>{detail.cost}</p>
                                <p>{detail.description}</p>
                            </div>
                        ))}

                        <h2>Amenities</h2>
                        <p>Restroom: {groundsDetails.amenities.toilets}</p>
                        <p>Showers: {groundsDetails.amenities.showers}</p>
                        <p>Firewood for sale: {groundsDetails.amenities.firewoodForSale}</p>

                        <h2>Directions</h2>
                        <p>Address: {groundsDetails.addresses[0].line1} {groundsDetails.addresses[0].city},{groundsDetails.addresses[0].stateCode} {groundsDetails.addresses[0].postalCode}</p>
                        <p>{groundsDetails.directionsOverview}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Reservation Stuff:
// .reservationUrl
// .regulationsOverview