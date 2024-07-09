import React from 'react';

function SideBar() {
	return (
		<aside id="customSidebar" className="menu">
			<ul>
				<li className="centered">
					<Icon name="home"/>
				</li>
			</ul>
			
		</aside>
	)
}

function Icon({name}) {
	const filename = name + '.png'
	console.log(process.env.PUBLIC_URL);
	return (
		<img className="centered-icon" src={`${process.env.PUBLIC_URL}/assets/${filename}`} alt="Home Icon" />
	)
}
export default SideBar