import { Route, Routes, BrowserRouter } from "react-router-dom"
import "./App.css"
import Login from "./pages/Login"
import Crticial from "./pages/Crticial"
import AddModule from "./pages/AddModule"
import Landing from "./pages/Landing"
import EditModule from "./pages/EditModule"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/about" element={<Login />} />
					<Route path="/critical" element={<Crticial />} />
					<Route path="/add" element={<AddModule />} />
					<Route path="/home" element={<Landing />} />
					<Route path="/edit-module/:moduleId" element={<EditModule />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
