// import React from 'react'
import { useEffect, useState } from "react"
import { IModule } from "./Landing"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import axios from "axios"

const EditModule = () => {

	const [moduleData, setModuleData] = useState<IModule>()
	const {moduleId} = useParams();
	const navigate = useNavigate();

	console.log('moduile id received is ', moduleId)

	const fetchModule = async () => {
		try {
			const response = await axios.get(
				`http://localhost:8000/api/modules/${moduleId}`
			)
			const module = response.data
			setModuleData(module)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchModule()
	}, [moduleId])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setModuleData(prevData => ({
			...prevData,
			[name]: value
		}));
	};

	const handleEdit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:8000/api/modules/${moduleId}`, moduleData);
			console.log('Module updated successfully');
			// Handle the response or perform additional tasks
		} catch (error) {
			console.error('Error updating module:', error);
			// Handle error scenarios
		}
	};

	const handleClick = () => {
		navigate('../home/')
	}

	return (
		<div >
			<Navbar />
			<div className=' flex w-full  items-center justify-center'>
				<form onSubmit={handleEdit}>
					<div className='flex flex-col items-start p-8 justify-center bg-gray-200 m-4 mt-40 rounded-lg border-orange border-2'>
						<div className='flex  justify-end'>
							<label className='flex'>
								<p className='text-xl text-blue px-4 my-2'>
									Name: 
								</p>
								<input className='focus:outline-0 px-4 my-2 rounded-md' type='text' name='name' value={moduleData?.name} onChange={handleChange}/>
							</label>
						</div>
						<label className='flex'>
							<p className='text-xl text-blue px-4 my-2'>
								Current Value:
							</p>
							<input className='focus:outline-0 px-4 my-2' type="number" name="currentValue" value={moduleData?.currentValue} onChange={handleChange} />
						</label>
						<label className='flex'>
							<p className='text-xl text-blue px-4 my-2'>
								Optimal Value:
							</p>
							<input className='focus:outline-0 px-4 my-2 rounded-md' type="number" name="optimal" value={moduleData?.optimal} onChange={handleChange} />
						</label>
						<label className='flex'>
						<p className='text-xl text-blue px-4 my-2'>
								Image:
							</p>
							<input className='focus:outline-0 px-4 my-2 rounded-md' type="file" name="deviceImage" onChange={handleChange} />
						</label>
						<div className='flex px-4 pt-4 mx-auto'>
							<button className='border-orange text-xl text-blue bg-white border-2 rounded-lg p-2' onClick={handleClick} type="submit">Edit Module</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditModule
