import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
import axios from "axios";

const stripePromise = loadStripe('pk_test_51IyEwCEnFVuR7xs8bxou43XnrrLp6WpQgy4fT64S9xB0ZGupX0o7v4qMb1gdtWFelq4yQ07DhK7a5RTgovF6VQRH00WVDDiSSY');


function Booking({name, time, mobile, price}) {

    const handleClick = async (event) => {
        // Get Stripe.js instance
        const stripe = await stripePromise; 
    
        // Call your backend to create the Checkout Session
        const response = await axios.post("http://localhost:4242/create-checkout-session", {name:name, price:price})
        //('/create-checkout-session', { method: 'POST' });

        console.log(response)
    
        const sessionId = response.data.id
    
        console.log(sessionId)
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: sessionId,
        });
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
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
