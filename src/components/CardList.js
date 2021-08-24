import React, {useState, useEffect} from "react"
import axios from "axios"
import Card from "./Card"
import {server} from "./Config"




function CardList() {

    const [trips, setTrips] = useState([]);
    const [loadPage, setLoadPage] = useState(2);

    useEffect(()=>{

        const fetchTrips= async()=>{
            const response =  await axios.get(`${server}/trips?_limit=${loadPage}`)        
            console.log(response)
            setTrips(response.data)
        } 
        fetchTrips()

}, [loadPage])
 
    function loadMore() {
        console.log("length of trip array", trips.length)
         
        let dynamicPage = loadPage +2;
        console.log("load more", loadPage)
        setLoadPage(dynamicPage)
        console.log(loadPage)
    }


    return (
        <div className= "font-sans min-h-screen antialiased bg-gray-200 pt-5 pb-5 " >
            {trips.map( (trip)=> {
                return(
                    <Card key={trip.id} tripId={trip.id} image={trip.Img} name={trip.Name} price={trip.Price} description= {trip.Description}/>
            )})}

                { (trips.lenght >loadPage || trips.length === loadPage) ?
            <button className="bg-black text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors mt-4 mb-4" onClick={loadMore}>Visa fler resor</button>
            :
            <p><strong>Alla alternativ visas</strong></p>}
        </div>
    )
}

export default CardList