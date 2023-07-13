import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import Module from "../components/Module"

export interface IModule {
	id?: string
	name?: string
	critical?: boolean
	optimal?: number
	currentValue?: number
	deviceImage?: string
}

const Landing = () => {
	const [modules, setModules] = useState<IModule[]>([])

	useEffect(() => {
		const fetchModules = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8000/api/modules"
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

export default Landing
