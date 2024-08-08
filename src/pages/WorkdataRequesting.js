import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function WorkDataSearch() {
	const LIST_INFO = [
		["정보시스템 현황", "간부직원 하계 휴가 계획", null, "2024-05-16"],
		["자문실적 및 자문결과 만족도", "안전예산 업무", "안전기획부", "2024-03-01"],
		["조직 및 인력운영 개선의견", "안전예산 업무", "안전기획부", "2024-01-28"],
		["부서장 경영계약 과제", "자료 1) 경영계약과제 취합.zip", "자산계약부", "2024-05-04"],
		["2024년 간부직원 하계 휴가 계획.pdf", "간부직원 하계 휴가 계획", "인사혁신부", "2024-04-17"]
	];

	const [searchTerm, setSearchTerm] = useState("");
	const [filteredData, setFilteredData] = useState(LIST_INFO);

	useEffect(() => {
		if (searchTerm === "") {
			setFilteredData(LIST_INFO);
		} else {
			setFilteredData(
				LIST_INFO.filter(item => item[0].toLowerCase().includes(searchTerm.toLowerCase()))
			);
		}
	}, [searchTerm]);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>

			<div className="mb-6 is-size-5 has-text-weight-bold">데이터 목록</div>
			<div className="work-search-box">
				{/* <button class="button has-text-right is-primary">요청 +</button> */}
				<div className="work-search-list">
					<div className="list has-visible-pointer-controls">
						<div style={{borderBottom:'1px solid lightgrey'}}>
							<button class="button is-pulled-right is-primary"><Link to="./new" >ddd</Link></button>
						</div>
						<ListItem info={['업무명', "ddd", '수정일', '수정일']} isLocked={false} />

						{filteredData.map((info, index) => (
							<ListItem key={index} type={info[0].split('.').pop()} info={info} isLocked={false} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

function ListItem({info, isLocked}) {

	return (
		<div className="list-item">
			<div className="list-item-content">
				<div className="list-item-title">{info[0]}</div>
				<div className="list-item-description">{info[1]}</div>
			</div>
			<div className="list-item-controls">
				<span className="mx-3">
				
				</span>
				<span className="mx-6">
					{info[2]}
				</span>
				<span className="">{info[3]}</span>
			</div>
			<div class="ml-6 buttons is-right">
		        <button class="button">
		          <span>수정</span>
		        </button>

		        <button class="button">
		          <span>제출요청</span>
		        </button>
	      </div>
		</div>
		)
}

export default WorkDataSearch;

