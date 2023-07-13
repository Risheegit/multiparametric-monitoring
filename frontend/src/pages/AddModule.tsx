// import React from 'react'
import axios from 'axios'
import { IModule } from './Landing'
import Navbar from "../components/Navbar"
import { ChangeEvent, useState } from 'react'

const AddModule = () => {

	const [moduleData, setModuleData] = useState<IModule>()
	const [deviceImage, setDeviceImage] = useState<File | null>(null);

	const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
		// const {name, value} = e.target
		// setModuleData(prevData => ({
		// 	...prevData, 
		// 	[name] : value
		// }))
		if (e.target.name === 'deviceImage') {
			if (e.target.files && e.target.files.length > 0) {
				setDeviceImage(e.target.files[0]);
			}
		} else {
			setModuleData({ ...moduleData, [e.target.name]: e.target.value });
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// if (deviceImage) {
		// 	moduleData.app
		// }
		const formData = new FormData();
		if (moduleData?.name){
			formData.append('name', moduleData.name);
		}
		if (moduleData?.currentValue) {
			formData.append('currentValue', moduleData?.currentValue.toString());
		}
		if (moduleData?.optimal){
			formData.append('optimal', moduleData?.optimal.toString());
		}
		if (deviceImage) {
			formData.append('deviceImage', deviceImage);
		}
		try {
			const response = await axios.post("http://localhost:8000/api/modules/add/", formData, {
			headers : {
				'Content-Type' : 'multipart/form-data'
			}
		});
			console.log('Module created successfully:', response.data);
			// Handle the response or perform additional tasks
		} catch (error) {
			console.error('Error creating module:', error);
			// Handle error scenarios
		}
		};

	return (
		<div >
			<Navbar />
			<div className=' flex w-full  items-center justify-center'>
				<form onSubmit={handleSubmit}>
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
							<button className='border-orange text-xl text-blue bg-white border-2 rounded-lg p-2' type="submit">Create Module</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddModule
