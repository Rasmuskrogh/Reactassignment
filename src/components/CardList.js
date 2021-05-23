import React, {useState, useEffect} from "react"
import axios from "axios"
import Card from "./Card"




function CardList() {

    const [trips, setTrips] = useState([]);
    const [loadPage, setLoadPage] = useState(2);
    //const [responseData, setResponseData] = useState([])

    useEffect(()=>{
        //console.log("from useEffect", loadPage)
        const fetchTrips= async()=>{
            const response =  await axios.get(`http://localhost:1337/trips?_limit=${loadPage}`)        
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

    function loadLess() {
        let dynamicPage2 = loadPage -2;
        console.log("load less", loadPage)
        setLoadPage(dynamicPage2)
        console.log(loadPage)
    }

    return (
        <div >
            {trips.map( (trip)=> {
                return(
                    <Card key={trip.id} image={trip.img} name={trip.name} price={trip.price} description= {trip.description}/>
            )})}

                { (trips.lenght >loadPage || trips.length === loadPage) ?
            <button onClick={loadMore}>Se flera</button>
            :
            <button onClick={loadLess}>Se färre</button> }
        </div>
    )
}

export default CardList