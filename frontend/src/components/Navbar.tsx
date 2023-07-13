import { Link } from "react-router-dom"

const Navbar = () => {

	const handleRedirect = () => {
		window.location.replace("https://www.yashodahospitals.com/")
	}
	return (
		<div className="bg-white border-orange border-2">
			<div className="flex justify-between">
				<div>
					<div className="flex-grow items-center justify-center relative">
						<Link to={"../home"}>
							<img
								src="/yashoda-hospitals-logo.png"
								className="py-2"
							/>
						</Link>
					</div>
				</div>
				<div className="flex justify-between">
					<Link to={"../add"}>
						<h1 className="text-2xl my-5 px-4 text-blue font-medium hover:scale-105">
							Add Module
						</h1>
					</Link>
					<Link to={"../critical"}>
						<h1 className="text-2xl my-5 px-4 text-blue font-medium hover:scale-105">
							View Critical
						</h1>
					</Link>
					<Link to={"../logout"}>
						<button onClick={handleRedirect}>
							<h1 className="text-2xl my-5 pl-4 pr-8 text-blue font-medium hover:scale-105">
								About Us
							</h1>
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
