import React, {useState, useEffect} from 'react'
import {Link} from  "react-router-dom"

function Menu() {

    const [jwt, setJwt] = useState("")

    useEffect(()=>{
        const JWT = localStorage.getItem("jwt")
        setJwt(JWT)
        //window.location.reload()

    }, [])
    
    function clearLocalStorage() {
        localStorage.clear();
        window.location.reload();
    }
    return (
       
           
<nav className="flex items-center justify-between flex-wrap bg-blue-300 p-6">
    <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl tracking-tight">Gotlandsfärjan</span>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
       
    { jwt ? 
        <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Hem</Link>
            <Link to="/cardList" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Boka resa</Link>
            <Link to="/view" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Mina resor</Link>  
            <Link to="/create" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-m">Skapa resa</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-m" onClick={clearLocalStorage}>Logga ut</Link>
            </div>
            
        :
    <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Hem</Link>
            <Link to="/cardList" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Boka resa</Link>
            <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-m">Logga in</Link>       
            <Link to="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-m">Skapa konto</Link>
            </div>
            
            
        }   

        </div>

</nav>
        
    )
}

export default Menu