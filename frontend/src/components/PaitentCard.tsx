// import React from 'react'
// import PropTypes from 'prop-types'
import { IPatient } from "../pages/Landing"
import { Link } from "react-router-dom"

const PaitentCard = (patient : IPatient ) => {
  return (
    <div>
        <div>
            <Link to={`/patient/${patient.id}`}>
                <h1>{patient.patientName}</h1>
            </Link>
            <h2>{patient.room}</h2>
            <h2>{patient.critical}</h2>
        </div>
    </div>

  )
}


export default PaitentCard