import axios from 'axios'
import React, {useState} from 'react'


function CreateTrip() {

    const initialValues = {
        name:"",
        description:"",
        price:0
    }

    const [formValues, setFormValues] = useState(initialValues)
    const [fileData, setFileData] = useState()
   

    function handleOnChange(e) {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    function handleOnChangePic(e) {
        setFileData(e.target.files[0])
    }

    function onHandleSubmit(e) {
       

        axios.post("http://localhost:1337/trips", {
            Name:formValues.name,
            Description:formValues.description,
            Price:formValues.price
        }).then((res)=>{
            console.log(res.data)

            const data = new FormData();
            data.append("files", fileData)

            data.append("ref", "trip")
            data.append("refId", res.data.id)
            data.append("field", "Img") 

            axios.post("http://localhost:1337/upload", data) 
            .then((image)=>console.log(image))
            .catch((error)=>console.log(error))
        
         }).catch((err)=> {
            console.log(err)
        })
    
    }

 
    return ( 
        
    <body>
        <div className="font-sans min-h-screen antialiased bg-gray-200 pt-24 pb-5">
            <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                <h1 className="font-bold text-center text-4xl text-blue-900">Skapa resa</h1>
                <form action="#" onSubmit={onHandleSubmit}>
                    <div className="flex flex-col bg-blue-500 p-10 rounded-lg shadow space-y-6">
                        <div className="flex flex-col space-y-1">
                            <input type="text" name="name" value={formValues.name} onChange={handleOnChange} className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Namn" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <input type="text" name="description" value={formValues.description} onChange={handleOnChange} className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Beskrivning" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <input type="number" name="price" value={formValues.price} onChange={handleOnChange} className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Pris" />
                        </div>                        
                        <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                        </div>
                        <input type="file" name="file" onChange={handleOnChangePic} />
                        <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                        
                            <button type="submit" className="bg-black text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Lägg till</button>
                        </div>
                    </div>
                </form>
             </div>
        </div>
    </body>    
    )
}

export default CreateTrip
