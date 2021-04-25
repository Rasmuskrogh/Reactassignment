import React from 'react'

function Card({bookingOption, price, description}) {
    return ( 
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 m-4">
            <img className="w-full" src="https://gotlandsbolaget.se/wp-content/uploads/2019/05/ms-visborg-webb-300x183.jpg" alt="båt"/>
            <div class="px-6 py-4">
                <div className="font-bold text-xl mb-2">Lyckas inte med texten{bookingOption}</div>
                <p className="text-grey-darker text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{price}</span> 
            </div>
        </div>
    )
}

export default Card