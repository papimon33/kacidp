import React from 'react';
import {Link} from 'react-router-dom';

function SideBar({color, textColor}) {
	const linkStyle = {
		marginTop: '1em',
		textAlign: 'center'
	};

	return (
		<aside id="customSidebar" style={{backgroundColor:color}}>
			<ul>
				<li className="centered">
					<Icon name="home" label="홈" to="/"/>
				</li>
				<li className="centered">
					<Icon name="round" label="데이터검색" to="/search2"/>
				</li>
				<li className="centered">
					<Icon name="round" label="분석레포트"/>
				</li>
				<li className="centered">
					<Icon name="round" label="업무자료" to="/workdata"/>
				</li>
				<li className="centered">
					<Icon name="round" label="대시보드"/>
				</li>
				<li className="centered">
					<Icon name="round" label="데이터서비스"/>
				</li>
				<li className="centered">
					<Icon name="round" label="커뮤니티"/>
				</li>
				<li className="mb-5">d</li>
				<li className="mb-5">d</li>
				<li className="mb-5" style={{borderBottom:"1px solid white"}}>d</li>
				<li className="centered">
					<Icon name="round" label="즐겨찾기"/>
				</li>
				<li className="centered">
					<Icon name="round" label="SELF-BI"/>
				</li>
				<li className="centered">
					<Icon name="round" label="분석환경"/>
				</li>
				{/* <li style={linkStyle}> */}
				{/* 	<Link to="/" style={{color:textColor}}>홈</Link> */}
				{/* </li> */}

				
				{/* <li style={linkStyle}> */}
				{/* 	<Link to="/search" style={{color:textColor}}>검색</Link> */}
				{/* </li> */}
				{/* <li style={linkStyle}> */}
				{/* 	<Link to="/search2" style={{color:textColor}}>검색2</Link> */}
				{/* </li> */}
				{/* <li style={linkStyle}> */}
				{/* 	<Link to="/workdata" style={{color:textColor}}>업무자료</Link> */}
				{/* </li> */}
			</ul>
		</aside>
	)
}

function Icon({name, label, to}) {
	const filename = name + '.png'
	// console.log(process.env.PUBLIC_URL);
	return (
		<Link to={to} className="has-text-centered mb-2">
			<img className="centered-icon" src={`${process.env.PUBLIC_URL}/assets/${filename}`} alt="Home Icon" />
			<div className="has-text-white is-size-7 mt-1">{label}</div>
		</Link>
	)
}


function popup() {
	return (
		<div>
			
		</div>
		)
}
export default SideBar