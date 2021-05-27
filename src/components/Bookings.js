import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Booking from "./Booking";

function Bookings() {

    const [bookings, setBookings] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [token, setToken] =useState(localStorage.getItem("jwt"))

    useEffect(()=>{

        console.log(userId)
        const fetchData = async ()=>{
            const response = await axios.get(`http://localhost:1337/bookings?users_permissions_user.id=${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            setBookings(response.data)
        }

        fetchData()
    }, []) 

    return (
        <div>
            <h1>Mina resor:</h1>

            {bookings.map((booking)=>{
                return(
                    <Booking key={booking.id} name={booking.name} time={booking.time} mobile={booking.mobile}/>
            )})}

            
        </div>
    )
}

export default Bookings
