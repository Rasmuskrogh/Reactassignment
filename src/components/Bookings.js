import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Booking from "./Booking";
import {server} from "./Config"

function Bookings() {

    const [bookings, setBookings] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] =useState(localStorage.getItem("jwt"))
    const [jwt, setJwt] = useState("")

    useEffect(()=>{

        console.log(userId)
        const fetchData = async ()=>{
            const response = await axios.get(`${server}/bookings?users_permissions_user.id=${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            setBookings(response.data)
            const JWT = localStorage.getItem("jwt")
            setJwt(JWT)
        }

        fetchData()
    }, []) 

    return (
        <div>
            { jwt ?
                <div>
                    <h1>Mina resor:</h1>

                    {bookings.map((booking)=>{
                        return(
                            <Booking key={booking.id} name={booking.name} time={booking.time} mobile={booking.mobile} price={booking.price}/>
                    )})}
                </div>
            : <div> You do not have access to this page</div>}
        </div>
    )
}

export default Bookings
