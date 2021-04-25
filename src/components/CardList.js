import React from 'react'
import Card from "./Card"

const arrayOfObjects = [
    {bookingOption:"Enkelresa Stockholm-Visby, andra klass" , price: "kr" , description:"En resa till Visby med tillgång till godisautomat och toalett"},
    {bookingOption:"Enkelresa Visby-Stockholm, andra klass" , price: "250kr" , description:"En resa till Stockholm med tillgång till godisautomat och toalett"},
    {bookingOption:"Tur och retur Visby-Stockholm, Stockholm-Visby, andra klass" , price: "480kr" , description:"En resa till Stockholm och tillbaka med tillgång till godisautomat och toalett"},
    {bookingOption:"Tur och retur Stockholm-Visby, Visby-Stockholm, andra klass" , price: "480kr" , description:"En resa till Visby och tillbaka med tillgång till godisautomat och toalett"},
    {bookingOption:"Enkelresa Visby-Stockholm, första klass" , price: "750kr" , description:"En resa till Visby med tillgång till soldäck, lunchbuffé och öppen bar"},
    {bookingOption:"Enkelresa Stockholm-Visby , första klass" , price: "750kr" , description:"En resa till Visby med tillgång till soldäck, lunchbuffé och öppen bar"},
    {bookingOption:"Tur och retur Visby-Stockholm, Stockholm-Visby, första klass" , price: "1400kr" , description:"En resa till Stockholm och tillbaka med tillgång till soldäck, lunchbuffé och öppen bar"},
    {bookingOption:"Tur och retur Stockholm-Visby, Visby-Stockholm, första klass" , price: "1400kr" , description:"En resa till Visby och tillbaka med tillgång till soldäck, lunchbuffé och öppen bar"}
]
function CardList() {
    return (
        <div className="flex flex-wrap justify-start">
            {arrayOfObjects.map( (trip)=> {
                return(
                    <Card {...trip.bookingOption} {...trip.price}/>
            )})}
        </div>
    )
}

export default CardList