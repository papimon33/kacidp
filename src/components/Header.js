import React, {useState} from 'react';

function Header({color, textColor}) {

	const [searchActivated, setSearchActivated] = useState(false);

	return (
		<nav id="customNavbar" className="navbar is-fixed-top" style={{backgroundColor:color}}>
			<div className="navbar-brand">
				{/* 데이터플랫폼 이름 */}
				<div className="navbar-item is-size-5 has-text-weight-bold" style={{color:textColor}}>IDPORTAL</div>
			</div>
			<div className="navbar-menu">
				<div className="navbar-start pl-6">
					<div className="navbar-item">
						<SearchBox/>
						<input className="input search-bar" type="text" placeholder="검색어를 입력하세요." />
					</div>
				</div>
				<div className="navbar-end">
					<a className="navbar-item" style={{color:textColor}}>한로로</a>
				</div>
			</div>
		</nav>
	)
}


function SearchBox({searchActivated}) {
	const searchBoxStyle = {
		position:'fixed',
		border: '1px solid black',
		backgroundColor:'black',
		left:500
	}

	return (
		<div>
			<div style={searchBoxStyle}>
				dadaddafafadw
			</div>
			<div></div>
		</div>
	)
}
export default Header;