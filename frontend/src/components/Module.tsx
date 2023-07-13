import { useEffect, useState } from "react"
import { IModule } from "../pages/Landing"
import { Link } from "react-router-dom"
import DeleteModuleButton from "./DeleteModuleButton"
// import { Link } from "react-router-dom"

const Module = (module: IModule) => {

	const [moduleId, setModuleId] = useState<string>()
	const [condition, setCondtion] = useState<string>('Stable')
	const [critColor, setCritColor] = useState<string>('blue')

	useEffect(() => {
		setModuleId(module.id)
		console.log('module id is ', moduleId)
		if (module.critical){
			setCondtion('Critical')
			setCritColor('red-600')
		}
		else {
			setCondtion('Stable')
		}
	}, [module, moduleId])

	// console.log("image url is ", module.deviceImage)

	const handleDelete = () => {
		// Handle any necessary actions after module deletion
		console.log('Module deleted');
	};

	return (
		<div className="">
			<div className="flex flex-col border-orange rounded-lg border-2 mt-10 m-4 w-5/5 h-100  bg-gray-200 opacity-95 p-4">
				<img src={module.deviceImage} width={100} height={100} />
				<h1 className="text-blue text-xl p-4">{module.name}</h1>
				<h2 className="text-blue px-4">
					Optimal Value: {module.optimal}
				</h2>
				<h2 className="text-blue px-4">
					Current Value: {module.currentValue}
				</h2>
				<div className="flex items-center justify-center">
					<h2 className="text-blue px-4">
						Condition: 
					</h2>
					<h2 className={`text-${critColor}`}>
						{condition}
					</h2>
				</div>
				<h2>{module.critical} </h2>
				<div className="flex justify-center mx-auto">
					<div className="p-4 pt-5">
						{/* <button onClick={() => handleEditModule(module.id)} type="submit">
							Edit
						</button> */}
						<Link to={`/edit-module/${moduleId}`}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg> </Link>
					</div>
					<div className="p-4">
						<DeleteModuleButton moduleId={moduleId} onDelete={handleDelete} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Module
