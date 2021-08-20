import React, {useState} from 'react';
import Login from "./Login";
import axios from "axios";

function Registration() {

    const initialValue = {
        username:"",
        email:"",
        password:"",
        admin:false
    }

    const [registerValues, setRegisterValues] = useState(initialValue);
    const [username, setUsername] = useState("");
    const [login, setLogin] = useState(false);
    const [error, setError] = useState("");


    function handleOnChange(e) {
        
        setRegisterValues({...registerValues, [e.target.name]: e.target.value})

 
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:1337/auth/local/register", {
                username: registerValues.username,
                email: registerValues.email,
                password: registerValues.password,
                admin: false
            })
            .then( (e)=> {
                if(e.data.user)
                setLogin(true)
             })
            .catch((err)=> {setError(err.response.data.message[0].messages[0].message)})
        
            
    }


    return (        
        <body>
        {login ? 
             <Login/>
             
              :
            <div className="font-sans min-h-screen antialiased bg-gray-200 pt-24 pb-5">
            <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                <h1 className="font-bold text-center text-4xl text-blue-900">Registrera dig</h1>
                <h1 className="text-red-400">{error}</h1>
                <form action="#" onSubmit={handleOnSubmit}>
                <div className="flex flex-col bg-blue-500 p-10 rounded-lg shadow space-y-6">
                    <h1 className="font-bold text-xl text-center">Skapa nytt konto</h1>
    
                    <div className="flex flex-col space-y-1">
                    <input type="text" name="username" id="username" value={registerValues.username} onChange={handleOnChange} className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Username" />
                    </div>
    
                    <div className="flex flex-col space-y-1">
                    <input type="text" name="email" id="email" value={registerValues.email} onChange={handleOnChange} className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="email" />
                    </div>
    
                    <div className="flex flex-col space-y-1">
                    <input type="password" name="password" id="password" value={registerValues.password} onChange={handleOnChange} className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
                    </div>
    
                    <div className="relative">
                    </div>
    
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                    <a href="" className="inline-block text-blue-500 hover:text-blue-800 hover:underline">Forgot your password?</a>
                    <button type="submit" className="bg-black text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Registrera</button>
                    </div>
                </div>
                </form>
                <div className="flex justify-center text-gray-500 text-sm">
               
                </div>
            </div>
            </div>
        }
        
        </body>
    )
}

export default Registration
