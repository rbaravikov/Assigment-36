import { Link, useParams } from "react-router-dom"
import button from '../styles/Button.module.scss'
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
    <div className={styles.container}>
    {logs[0] && <h1 className={styles.h1}>{logs[0].name}: Health Records</h1>}
    <div className={(styles.nav)}>
    <Link className={(styles.button + ' ' + button.back)} to='/' >Go Back</Link>
    <Link className={(styles.button + ' ' + button.addLog)} to={'/addpetlog/' + id} >ADD LOG</Link>
    </div>
    <div className={styles.cardsContainer}>
      {logs && logs.map((log, index) => (
        <div className={styles.card} key={index}>
          <h2 className={styles.h2}>{log.status}</h2>
          <p>{log.description}</p>
          <p className={styles.date}>{new Date(log.dob).toLocaleDateString("lt")}</p>
        </div>
      ))}
    </div> 
    </div>
  )
}

export default PetLogs