import { Link, useParams } from "react-router-dom"
import styles from '../styles/PetLogs.module.scss'
import { useEffect, useState } from "react"

const PetLogs = () => {
  const [logs, setLogs] = useState([])
  const { id } = useParams()

  const fetchData = async () => {
    try{
        const resp = await fetch(`https://vetbee-backend.glitch.me/v1/logs/${id}`)
        const data = await resp.json()
        setLogs(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {fetchData()}, [])

  return (
    <>
    <h1>Lucky: Health Records</h1>
    <div className={styles.buttonsContainer}>
    <Link className={styles.back} to='/' >Go Back</Link>
    <Link className={styles.addLog} to={'/addpetlog/' + id} >ADD LOG</Link>
    </div>
    {logs.map((log, index) => (
    <div className="cards" key={index}>
      <div className={styles.card}>
        <h2 className={styles.h2}>{log.status}</h2>
        <p>{log.description}</p>
        <p className={styles.date}>{new Date(log.dob).toLocaleDateString("lt")}</p>
      </div>
    </div> 
    )
    )}
    </>
  )
}

export default PetLogs