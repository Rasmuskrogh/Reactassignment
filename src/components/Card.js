import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from "axios";

function Card({name, price, description, image}) {

    const initialValues = {
        name:"",
        time:"",
        mobile:null
    }

    const [modalIsOpen, setIsOpen] =useState(false);
    const [formValues, setFormValues] = useState(initialValues);

    const customStyles = {
        content : {
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
            const response = await axios.post("http://localhost:1337/bookings", {
                name:formValues.name,
                time:formValues.time,
                mobile:Number(formValues.mobile)
            })
            console.log(response)
        }
        catch(error) {
            console.log(error)
        }
    }

    return ( 
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 m-4">
            <img src={`http://localhost:1337${image.formats.small.url}`} alt="picture of a gotlandsboat"/>
            <div class="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-grey-darker text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{price}</span> 
            </div>
            <button onClick={openModal}>Boka resa</button>
            
            
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
  
            {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
            <button onClick={closeModal}>close</button>
            <div>Boka tid genom att fylla i de olika fälten och tyck sedan på skicka</div>
            <form onSubmit= {handleOnSubmit}>
              <input type="text" name="name" value={formValues.name} onChange={handleOnChange}/>
              <input type="text" name="time" value={formValues.time} onChange={handleOnChange}/>
              <input type="number" name="mobile" value={formValues.mobile} onChange={handleOnChange}/> 
              <button type="submit">Skicka</button>
            </form>
          </Modal>
        
        </div>
    )
}

export default Card