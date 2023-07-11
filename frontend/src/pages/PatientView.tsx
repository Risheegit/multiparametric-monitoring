// import React from 'react'
import axios from "axios"

const PatientView = () => {

  const fetchPatient = async () => {
    try {
      // const response = await axios.get(`http://localhost:8000/api/patients/${}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>PatientView</div>
  )
}

export default PatientView