import React from 'react';
import {Link} from 'react-router-dom';

function SideBar() {
	const linkStyle = {
		marginTop: '1em',
		textAlign: 'center'
	};

	return (
		<aside id="customSidebar" className="menu">
			<ul>
				<li className="centered">
					<Icon name="home"/>
				</li>
				<li style={linkStyle}>
					<Link to="/search" style={{color:'white'}}>검색</Link>
				</li>
				<li style={linkStyle}>
					<Link to="/workdata" style={{color:'white'}}>업무자료</Link>
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