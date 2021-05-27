import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import axios from "axios";

function Login() {

    const initialValues= {
        username:"",
        password:"",
        email:""
    }

    const [formValues, setFormValues]= useState(initialValues);
    const [error, setError]= useState("");
    //const [authentication, setAuthentication]= useState(false);
    const [username, setUsername] = useState("")
    const [jwt, setJwt] = useState("")
    const history= useHistory();

    function handleOnChange(e) {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    useEffect(()=> {

        const JWT = localStorage.getItem("jwt")
        setJwt(JWT);

    }, [])

    

    function handleOnSubmit(e) {

        e.preventDefault();

        axios
        .post ("http://localhost:1337/auth/local", {
            identifier: formValues.username,
            password: formValues.password,
            email: formValues.email
        })
        .then(response => {
            console.log("User profile", response.data.user);
            console.log("user token", response.data.jwt);

            //setJwt(response.data.jwt)
            localStorage.setItem("jwt", response.data.jwt);
            localStorage.setItem("userId", response.data.user.id)
            //localStorage.setItem("username", response.data.user.username);
            setUsername(response.data.user.username);
            history.push("/")


           // const JWT=localStorage.getItem("jwt")
            //console.log(testJWT)

            //setJwt(JWT)

           // console.log("jwt state", jwt)

            console.log("user data", response.data);
            
            window.location.reload();
            

   
        })
        .catch((err)=> {
            console.log(err);
            setError(err.response.data.message[0].messages[0])
        })
    }


    return (
        <body>
            <div className="font-sans min-h-screen antialiased bg-gray-200 pt-24 pb-5">
                <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                    <h1 className="font-bold text-center text-4xl text-blue-900">Logga in</h1>
                    <h1  className="text-red-500">{error}</h1>
                    <form onSubmit={handleOnSubmit}>
                        <div className="flex flex-col bg-blue-500 p-10 rounded-lg shadow space-y-6">
                            <h1 className="font-bold text-xl text-center">Logga in på ditt konto</h1>

                            <div className="flex flex-col space-y-1">
                                <input type="text" name="username" value={formValues.username} onChange={handleOnChange} id="username" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Username" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <input type="text" name="email" value={formValues.email} onChange={handleOnChange} id="email" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Email" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <input type="password" name="password" value={formValues.password} onChange={handleOnChange} id="password" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
                            </div>
                            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                                <button type="submit" className="bg-black text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Logga in</button>
                            </div>
                        </div>
                    </form>    
                </div>
            </div>
        </body>

        
    )
}

export default Login
