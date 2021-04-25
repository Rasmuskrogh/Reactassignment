import React from 'react';
import {Link} from "react-router-dom";

function Menu() {
    return (
        
           
<nav className="flex items-center justify-between flex-wrap bg-blue-300 p-6">
    <div className="flex items-center flex-no-shrink text-white mr-6">
        <svg classNme="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl tracking-tight">Gotlandsfärjan</span>
    </div>
    <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"></button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Hem</Link>
            <Link to="/CardList" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Boka resa</Link> 
            <Link to="/View" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Mina resor</Link>  
            <Link to="/Login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 text-m">Logga in</Link>     
        </div>
    </div>
</nav>
        
    )
}

export default Menu