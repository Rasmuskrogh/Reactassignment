import React from 'react'

function Booking({name, time, mobile}) {
    return (
        <div>
            <li> name: {name} </li>
            <li> time: {time} </li>
            <li> mobile: {mobile} </li>
        </div>
    )
}

export default Booking
