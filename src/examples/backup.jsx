import form from  '../styles/Form.module.scss'
import { useContext, useState } from "react";
import { AppContext } from '../App';


const AddPet = () => {
    
  const [newPet, setNewPet] = useState({ name:'', dob:'', client_email:''})  
  
    const fetchData = async () => {
      try {
          const resp = await fetch('https://vetbee-backend.glitch.me/v1/pets', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newPet)
          });
  
          const data = await resp.json();
          setPetList(...petList, data)
      } catch (error) {
          console.log(error)
      }}

  const handleClick = (e) => {
    e.preventDefault()
    fetchData()
    
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
      <form className={form.form} onInput={handleInput} action="">
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
        <button className={form.button} type="submit" onClick={handleClick}>ADD PET</button>
        </label>
      </form>
    </div>
  )
}

export default AddPet

