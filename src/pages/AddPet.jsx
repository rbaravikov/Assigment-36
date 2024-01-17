import form from  '../styles/Form.module.scss'
import { useContext, useState } from "react";
import { useNavigate  } from 'react-router-dom';
import buttons from '../styles/Button.module.scss'


const AddPet = () => {
  const navigate = useNavigate()
  const [newPet, setNewPet] = useState({ name:'', dob:'', client_email:''})  

  const postData = async () => {
    try {
        const resp = await fetch('https://vetbee-backend.glitch.me/v1/pets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPet)
            
        });
        const data = await resp.json();
        navigate('/')
    } catch (error) {
        console.log(error)
    }}

  const handleClick = (e) => {
    e.preventDefault()
    postData()
  }
    
  const handleInput = (e) =>{
    e.target.name === 'dob'?
    setNewPet((prevState) => ({ 
      ...prevState,
      [e.target.name]: new Date(e.target.value).getTime()
    }))
    : setNewPet((prevState) => ({ 
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }


  return (
    <div className={form.container}>
      <h1>Add Your Pet</h1>
      <form className={form.form} onChange={handleInput} action="">
        <label>
          Pet Name: <br/>
          <input name='name' type="text" placeholder="Lockis" />
        </label>
        <label>
          Pet Birthday: <br/>
          <input name='dob' type="date"/>
        </label>
        <label>
          Pet Email: <br/>
          <input name='client_email'type="email" placeholder='lockis@email.com' />
        </label>
        <button className={buttons.addPet} type="submit" onClick={handleClick}>ADD PET</button>
      </form>
    </div>
  )
}

export default AddPet

