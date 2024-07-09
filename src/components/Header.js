import React from 'react';

function Header() {
	return (
		<nav id="customNavbar" className="navbar is-fixed-top">
			<div className="navbar-brand">
				{/* 데이터플랫폼 이름 */}
				<a className="navbar-item is-size-5 has-text-weight-bold has-text-white">IDPORTAL</a>
			</div>
			<div className="navbar-menu">
				<div className="navbar-start pl-6">
					<div className="navbar-item">
						<input className="input search-bar" type="text" placeholder="검색어를 입력하세요." />
					</div>
				</div>
				<div className="navbar-end">
					<a className="navbar-item">data</a>
				</div>
			</div>
		</nav>
	)
}

export default Header;