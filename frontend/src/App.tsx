import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css'
import Login from './pages/Login'
import Crticial from './pages/Crticial'
import AddPatient from './pages/AddPatient'
import Landing from './pages/Landing'
import PatientView from './pages/PatientView'

function App() {

  return (
    <>
    <BrowserRouter>
			<Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/critical" element={<Crticial />} />
        <Route path="/add" element={<AddPatient />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/patient/:id" element={<PatientView />} />
			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App
