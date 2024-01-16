import styles from  '../styles/PetList.module.scss'
import button from '../styles/Button.module.scss'
import stylesCard from '../styles/Card.module.scss';
import { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import { AppContext } from '../App';

const Home = () => {
    const { petList, setPetList } = useContext(AppContext)

    const fetchData = async () => {
        try{
            const resp = await fetch('https://vetbee-backend.glitch.me/v1/pets')
            const data = await resp.json()
            setPetList(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchDelete = async (id) => {
        try {
            const resp = await fetch(`https://vetbee-backend.glitch.me/v1/pets/${id}`, {
                method: 'DELETE',
            });
            if (resp.ok) {
                alert('Delete succesfull')
                fetchData()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        if(confirm(`Are you sure? ${id} will be gone`)) {fetchDelete(id)}
    }

    useEffect(() => {fetchData()}, [])

    
    return (
        <>
    <div className={styles.home}>
        <h1 className={styles.h1}>Pet List</h1>
        <Link className={button.addPet} to='/AddPet' >ADD PET</Link>
    </div>
    <div className={styles.container}>
        {petList && petList.map((pet) => (
            <div className={stylesCard.card} key={pet.id}>
                <h2>{pet.name}</h2>
                <p>{new Date(pet.dob).toLocaleDateString("lt")} <br/>{pet.client_email}</p>
                <div className={stylesCard.buttonContainer}>
                <button className={button.button}>View Log</button>
                <button onClick={() =>handleDelete(pet.id)} className={stylesCard.delete}>Delete</button>
                </div>
            </div>
        ))}
    </div>
    </>    
  )
}

export default Home