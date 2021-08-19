import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";

const stripePromise = loadStripe('pk_test_51IyEwCEnFVuR7xs8bxou43XnrrLp6WpQgy4fT64S9xB0ZGupX0o7v4qMb1gdtWFelq4yQ07DhK7a5RTgovF6VQRH00WVDDiSSY');


function Booking({name, time, mobile, price}) {

    const handleClick = async (event) => {
        const stripe = await stripePromise; 
    
        const response = await axios.post("http://localhost:4242/create-checkout-session", {name:name, price:price})

        console.log(response)
    
        const sessionId = response.data.id
    
        console.log(sessionId)
        const result = await stripe.redirectToCheckout({
          sessionId: sessionId,
        });
    
        if (result.error) {
        }
    };



    return (
        <div>
            <li> name: {name} </li>
            <li> time: {time} </li>
            <li> mobile: {mobile} </li>
            <li> price: {price} </li>

            <button role="link" onClick={handleClick}>
                Checkout
            </button>
        </div>

   
        
    )
}

export default Booking
