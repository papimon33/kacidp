import React, {useState, useEffect} from 'react';

function WorkDataSearch() {
	const LIST_INFO = [
		["2024년 간부직원 하계 휴가 계획.xls", "간부직원 하계 휴가 계획", "인사부", "2024-05-16"],
		["2024 상반기 안전예산 분석 계획.doc", "안전예산 업무", "안전기획부", "2024-03-01"],
		["2024 상반기 안전예산 목록.xls", "안전예산 업무", "안전기획부", "2024-01-28"],
		["2024년 발주계획 관리.zip", "간부직원 하계 휴가 계획", "자산계약부", "2024-05-04"],
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
				<input className="work-search-input" placeholder="업무자료를 검색하세요." value={searchTerm} onChange={handleSearchChange}/>
				<div className="work-search-list">
					<div className="list has-visible-pointer-controls">
						{filteredData.map((info, index) => (
							<ListItem key={index} type={info[0].split('.').pop()} info={info} isLocked={false} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

function ListItem({type, info, isLocked}) {
	const typeIconPath = `${process.env.PUBLIC_URL}/assets/workdata_${type}.png`;

	return (
		<div className="list-item">
			<div className="list-item-image">
				<figure className="image is-48x48">
					<img src={typeIconPath}/>
				</figure>
			</div>
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
			{/* <div className="list-item-controls"> */}
			{/* 	<div className="button is-right"> */}
			{/* 		<span class="icon is-small"> */}
			{/* 			<i class="fas fa-ellipsis-h">...</i> */}
			{/* 		</span> */}
			{/* 	</div> */}
			{/* </div> */}
		</div>
		)
}

export default WorkDataSearch;

