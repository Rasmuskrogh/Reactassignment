import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from "axios";
import {server} from "./Config"

function Card({name, price, description, image, tripId}) {
    const initialValues = {
        name:"",
        time:"",
        mobile:null
    }

    const newValues = {
        name:"",
        description:"",
        price:0
    }

    const [modalIsOpen, setIsOpen] =useState(false);
    const [formValues, setFormValues] = useState(initialValues);
    const [changeValues, setChangeValues] = useState(newValues);
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [token, setToken] = useState(localStorage.getItem("jwt"));
    const [admin, setAdmin] =useState(localStorage.getItem("admin"))

     

    const customStyles = {
        content : {
          background            : 'rgba(59, 130, 246, 0.6',
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }
    
    function handleOnChange(e) {
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    async function handleOnSubmit(e) {
        e.preventDefault();
        console.log(formValues)
        console.log(Number(formValues.mobile))
        try{
            const response = await axios.post(`${server}/bookings`, {
                name:formValues.name,
                time:formValues.time,
                mobile:Number(formValues.mobile),
                users_permissions_user:userId 
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }) 
            
            setIsOpen(false)
            console.log(response)

        }
        catch(error) {
            console.log(error)
        }
    }

    function handleOnChangeEdit (e) {
        setChangeValues({...changeValues, [e.target.name]: e.target.value})
    }

    function handleOnSubmitEdit (e) {
        e.preventDefault();
        axios.put(`${server}/trips/${tripId}`, {
            name:changeValues.name,
            description:changeValues.description,
            price:changeValues.price,
        }).then((res)=>{
            console.log(res.data)
        
         }).catch((err)=> {
            console.log(err)
        })
    }

    function RemoveCard (e) {
        e.preventDefault();
        axios.delete(`${server}/${tripId}`)
    }

    return ( 
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 m-4 bg-gray-400">
            <img src={`${server}${image.url}`} alt="picture of a gotlandsboat"/>
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{name}</h3>
                <p className="text-grey-darker text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"> Pris: {price}kr</span> 
            </div>
 
            {(admin==="true" ) && <div>
                <form onSubmit={handleOnSubmitEdit} className="border-black">
                <input type="text" value={changeValues.name} onChange={ handleOnChangeEdit} name="name" placeholder="Change name" className="border-black"></input>
                <input type="text" value={changeValues.description} onChange={ handleOnChangeEdit} name="description" placeholder="Change description" className="border-black"></input>
                <input type="number" value={changeValues.price} onChange={ handleOnChangeEdit} name="price" placeholder="Change price" className="border-black"></input>
                <br/>
            <button type="submit" className="bg-green-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors mb-4" >Redigera resa</button>
            </form>
            <button className="bg-red-600 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors mb-4" onClick={RemoveCard}>Ta bort resa</button>
            </div> }
            <button className="bg-black text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors mb-4" onClick={openModal}>Boka resa</button>

            
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
  
            <button onClick={closeModal}>close</button>
            <div>Boka tid genom att fylla i de olika f??lten och tyck sedan p?? skicka</div>
            <form onSubmit= {handleOnSubmit}>
              <input type="text" name="name" placeholder="Namn" value={formValues.name} onChange={handleOnChange}/>
              <input type="text" name="time" placeholder="Datum" value={formValues.time} onChange={handleOnChange}/>
              <input type="number" name="mobile" placeholder="Mobiltelefonnummer" value={formValues.mobile} onChange={handleOnChange}/> 
              <button type="submit">Boka</button>
            </form>
          </Modal>
        
        </div>
    )
}

export default Card