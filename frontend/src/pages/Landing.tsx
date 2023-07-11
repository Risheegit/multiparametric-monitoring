// import React from 'react'
import { useState, useEffect } from "react"

import Navbar from "../components/Navbar"
import axios from "axios"
import PaitentCard from "../components/PaitentCard"

export interface IPatient {
  id : string,
  patientName : string,
  room : number,
  critical ?: boolean,
  temperature ?: number,
  glucose ?: number,
  co2 ?: number,
  o2 ?: number,
  pressure ?: number,
}

const Landing = () => {
  const [patients, setPatients] = useState<IPatient[]>([])

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/patients")
        setPatients(response.data)
        // console.log("new [patient data is : ", response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchPatients()
  }, [])

  return (
    <div>
      <Navbar/>
      <div>
        {patients.map((patient,index ) => (
          <PaitentCard key={index} { ... patient}/>
        ))}
      </div>
    </div>
  )
}

export default Landing