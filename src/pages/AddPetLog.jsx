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
        postLog()
    }


    return (
        <div>
            <h1>Lucky Log</h1>
            <form action="" onChange={handleInput}>
                <label >
                Status <br/>
                <input name='status' type="text" />
                </label>
                <label >
                Description <br/>
                <input name='description' type="text" />
                </label>
                <div className="buttons">
                    <button type="submit" onClick={handleSubmit}>ADD PET</button>
                    <Link to={'/petlogs/' + id} >Go Back</Link>
                </div>
            </form>
        </div>
  )
}

export default AddPetLog