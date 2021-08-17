import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"

function Profile() {

    const initialValues = {
        email: ""
    }

    const initialValues2 = {
        username: ""
        //heroku trigger
    }

    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [editEmail, setEditEmail] = useState(initialValues)
    const [editUsername, setEditUsername] = useState(initialValues2)
    const history = useHistory();

    useEffect(() => {


        const fetchData = async () => {
            const response = await axios.get(`http://localhost:1337/users?id=${userId}`

            );

            setUsername(response.data[0].username)
            setEmail(response.data[0].email)
            console.log(response.data[0].username)
            console.log(response.data[0].email)

        }

        fetchData()
    }, [])


    function handleOnChangeEditUsername(e) {
        setEditUsername({ ...editEmail, [e.target.name]: e.target.value })
    }

    function handleOnSubmitEditUsername(e) {
        e.preventDefault();
        axios.put(`http://localhost:1337/users/${userId}`, {
            username: editEmail.username

        }).then((res) => {
            console.log(res.data)

        }).catch((err) => {
            console.log(err)
        })
    }

    function handleOnChangeEditEmail(e) {
        setEditEmail({ ...editEmail, [e.target.name]: e.target.value })
    }

    function handleOnSubmitEditEmail(e) {
        e.preventDefault();
        axios.put(`http://localhost:1337/users/${userId}`, {
            email: editEmail.email

        }).then((res) => {
            console.log(res.data)

        }).catch((err) => {
            console.log(err)
        })
    }

    function removeUser(e) {
        e.preventDefault();
        axios.delete(`http://localhost:1337/users/${userId}`)
        localStorage.clear()
        history.push("/")
        window.location.reload()
    }

    return (
        <div>

            Användarnamn: {username} <br />
            <form onSubmit={handleOnSubmitEditUsername} className="border-black">
                <input type="text" value={editUsername.username} onChange={handleOnChangeEditUsername} name="username" placeholder="Change username" className="border-black"></input>
                <button type="submit" className="bg-green-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors mb-4" >Redigera</button> </form>
        Email: {email}<br />
            <form onSubmit={handleOnSubmitEditEmail} className="border-black">
                <input type="text" value={editEmail.email} onChange={handleOnChangeEditEmail} name="email" placeholder="Change email" className="border-black"></input>
                <button type="submit" className="bg-green-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors mb-4" >Redigera</button> </form>

            <button className="bg-red-600 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors mb-4" onClick={removeUser}>Radera användare</button>

        </div>
    )
}

export default Profile
