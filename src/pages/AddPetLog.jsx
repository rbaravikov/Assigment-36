import styles from '../styles/AddPetLog.module.scss'
import form from  '../styles/Form.module.scss'
import button from '../styles/Button.module.scss'
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const AddPetLog = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [petLog, setPetLog] = useState({  pet_id: id, description: '', status: '' })

    const postLog = async () => {
        try {
            const resp = await fetch('https://vetbee-backend.glitch.me/v1/logs', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(petLog)
                
            });
            const data = await resp.json();
            if(resp.ok) {
                alert("Success")
                navigate('/petlogs/' + id)
            }
        } catch (error) {
            console.log(error)
    }}

    const handleInput = (e) =>{
        setPetLog((prevState) => ({ ...prevState,
          [e.target.name]:e.target.value
        }))
        console.log(petLog)
        console.log(id)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        petLog.description && petLog.status ? postLog() : alert("Užpildykite visus laukelius")
    }


    return (
        <div className={form.container} >
            <h1>Lucky Log</h1>
            <form className={form.form} action="" onChange={handleInput}>
                <label > Status <br/>
                <input className={form.input} name='status' type="text" placeholder='Hiberium Colliulitus' />
                </label>
                <label > Description <br/>
                <textarea name='description' className={styles.description} type="text" placeholder='Removed some fat...' />
                </label>
                <div className={button.buttonContainer}>
                    <button className={button.addLog} type="submit" onClick={handleSubmit}>ADD PET</button>
                    <Link className={button.back} to={'/petlogs/' + id} >Go Back</Link>
                </div>
            </form>
        </div>
  )
}

export default AddPetLog