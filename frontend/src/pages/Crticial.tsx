// import React from "react"
import { useState, useEffect } from "react"
import { IModule } from "./Landing"
import axios from "axios"
import Module from "../components/Module"
import Navbar from "../components/Navbar"

const Crticial = () => {
	const [modules, setModules] = useState<IModule[]>([])
	useEffect(() => {
		const fetchModules = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8000/api/modules/critical"
				)
				setModules(response.data)
				// console.log("new [patient data is : ", response.data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchModules()
	}, [])

	return (
		<div>
			<Navbar />
			<div className="p-4 h-screen flex items-center justify-center">
				<div className=" w-3/6 h-screen flex flex-wrap   ">
					{modules.map((module, index) => (
						<Module key={index} {...module} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Crticial
