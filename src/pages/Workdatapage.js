import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import WorkDataSearch from './WorkDataSearch';
import WorkdataRequesting from './WorkdataRequesting';
import Form from './Form';
import { Link } from 'react-router-dom';


function WorkdataPage() {
	return (
		<div className="work-container">
			<div className="work-sidebar">
				<div className="is-size-4 mb-5">업무자료</div>
				
				<div>
					<dl>
						<dt><Link to="./list">자료목록</Link></dt>
						<dt><Link to="./mywork">내 업무</Link></dt>
						<dd>정보시스템 현황</dd>
						<dd>자문실적, 자문결과 만족도</dd>
						<dd>조직 및 인력운영 개선의견</dd>
						<dd>부서장 경영계약과제</dd>
						<dt><Link to="./request">요청한 업무</Link></dt>
						<dt><Link to="./todo">요청받은 업무</Link></dt>
					</dl>
				</div>
			</div>
			<div className="work-content">
				<div className="container">
					<Routes>
						<Route path="/list" element={<WorkDataSearch/>}/>
						<Route path="/mywork" element={<WorkDataSearch/>}/>
						<Route path="/request" element={<WorkdataRequesting/>}/>
						<Route path="/request/new" element={<Form/>}/>
						<Route path="/todo" element={<WorkDataSearch/>}/>
					</Routes>
				</div>
			</div>
		</div>
	)
}


export default WorkdataPage;