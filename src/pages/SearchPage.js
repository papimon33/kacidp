import React, {useState} from 'react';

function SearchPage() {
	return (
		<div className="container">
			<div className="search-box">
				<div className="my-5 search-filters">
					<Button text="전체" selected="{true}"/>
					<Button text="전자문서" />
					<Button text="데이터검색" />
					<Button text="레포트" />
					<Button text="내부메일" />
					<Button text="게시판" />
					<Button text="규정" />
					<Button text="업무자료"/>
					<img className="search-setting is-clickable" src={`${process.env.PUBLIC_URL}/assets/search-setting.png`} />

				</div>
				<div className=''>
					<div className="search-keyword">
						<span>어제 김포공항 여객 수</span>로 검색된 내용입니다. <span>어제 김포공항 ㅇ객수</span>로 다시검색
					</div>
				</div>
				<div className="search-brief-card">
					2024년 6월 20일 김포공항 출발 여객 수는 <span className="search-biref-value">1,000명</span>입니다.
				</div>
				<div className='my-3 border-bottom'>
					<SearchCaption text="전자문서" />
					<SearchResultItem icon="document-color" caption="전자문서" title="여름철 복장 간소화 계획 알림" description="인사혁신실-4115 /  `24.6.19 / 노정인 / 1. 인사혁신실-0000 관련입니다. 2. 위 관련 복장을 간소화할 예정이오니..." />
					<SearchResultItem icon="document-color" caption="전자문서" title="2024년도 감사 착안사항 공모 심사결과 알림" description="감사실-415, `24.6.16, 노정인" />
					<SearchResultItem icon="document-color" caption="전자문서" title="2024년도 필수교육 수강 요청" description="인사혁신실-4115, `24.6.16, 노정인" />
					<SearchMore caption="전자문서"/>
				</div>
				<div className=' my-3 border-bottom'>
					<SearchCaption text="데이터검색" />

					<SearchResultItem icon="db-color" caption="데이터검색" title="[iFIS] 운항현황데이터" description="운항편별 운항시간, 지연여부, 공급좌석 정보를 포함하고 있는 데이터" />
					<SearchResultItem icon="db-color" caption="데이터검색" title="[ERP] 직원정보목록" description="전직원 사번, 이름, 직급, 부서 등 정보를 포함하고 있는 데이터" />
				</div>
				<div className=' my-3 border-bottom'>
					<SearchCaption text="레포트" />

					<SearchResultItem icon="visual-color" caption="레포트" title="키오스크별 사용률 레포트" description="키오스크 번호별 사용량 및 사용률을 나타낸 시각화 자료" />
					{/* <SearchResultItem icon="visual-color" caption="레포트" title="조류 퇴치 현황 레포트" description="조류 퇴치 현황 시각화 자료" /> */}
				</div>
				<div className=' my-3 border-bottom'>
					<SearchCaption text="내부메일" />

					<SearchResultItem icon="email-color" caption="내부메일" title="주간일정 취합요청(~6.20)" description="박현우 / `24.6.19 / 안녕하세요? 주간일정을 보내주시기 바랍니다....." />
					<SearchResultItem icon="email-color" caption="내부메일" title="투자사업 상반기 집행전망 점검 및 제출" description="(보낸사람) 김민섭, (날짜) `24.6.18, (내용) 데이터융합부 투자사업 상반기 집행현황을 제출..." />
				</div>
				<div className=' my-3 border-bottom'>
					<SearchCaption text="게시판" />

					<SearchResultItem icon="board-color" caption="게시판" title="[조합소식] 사측은 경영평가 결과를 사과하고 해명하라!" description="(작성자) 본조노동조합 / (날짜) `24.6.20" />
					<SearchResultItem icon="board-color" caption="게시판" title="[CEO공지사항] 2023년도 공기업 경영평가 결과 발표와 관련하여" description="(작성자) 이정기, (날짜) `24.6.20" />
				</div>
				<div className=' my-3 border-bottom'>
					<SearchCaption text="업무자료" />

					<SearchResultItem icon="work-color" caption="업무자료" title="2024 부서장 경영계약과제" description="기획조정실 / (자료1) 부서장 경영계약과제 추진 계획.zip" />
					<SearchResultItem icon="work-color" caption="업무자료" title="2024 부서장 경영계약과제" description="기획조정실 / (자료1) 부서장 경영계약과제 추진 계획.zip" />
				</div>	
			</div>
			<Preview/>
		</div>
	)
}

function Button({text, selected}) {
	return (
		<button className={`button ${selected ? 'is-link' : ''}`}>
			<span>{text}</span>
			<span>5</span>
		</button>
	)
}

function SearchResultItem({icon, caption, title, description}) {
	const iconpath = `${process.env.PUBLIC_URL}/assets/${icon}.png`;
	const dotpath = `${process.env.PUBLIC_URL}/assets/three-dots.png`;

	return (
		<div>
			{/* <div className="search-item-caption">#{caption}</div> */}
			<img className="search-icon" src={`${iconpath}`} />
			<div className="search-item">
				<div>{title} <img src={`${dotpath}`} className="dots"/></div>
				<div>{description}</div>
			</div>
		</div>
	)	
}

function SearchCaption({text}) {
	const arrowpath = `${process.env.PUBLIC_URL}/assets/arrow-move.png`
	return (
		<div className="search-caption">{`# ${text}`}</div>	

		// <div className="search-caption">{`# ${text}`} <span className="search-arrow-move">→</span></div>	
	)
}

function SearchMore({caption}) {
	return (
		<div className="search-more">{caption} 더보기</div>
	)
}

function Preview() {
	const [isVisible, setIsVisible] = useState(true);

	const handleClick = () => {
		setIsVisible(false);
	};

	return ( isVisible &&
		<article class="message search-preview has-background-white">
			{/* <div class="message-header"> */}
			{/* 	<p>미리보기</p> */}
			{/* 	<button class="delete" aria-label="delete" onClick={handleClick}></button> */}
			{/* </div> */}
			<div class="message-body">
				<div className="fixed-grid has-3-cols">
					<div className='grid border-bottom pb-5'>
						<div className='cell'><button className="button is-rounded">페이지이동</button></div>
						<div className='cell'><button className="button is-rounded">링크복사</button></div>
						<div className='cell'><button className="button is-rounded is-danger" onClick={handleClick}>닫기</button></div>
					</div>
					<table className="table is-fullwidth">
						<tbody>
							<tr>
								<th>제목</th>
								<td>2024년도 감사 착안사항 공모 심사결과 알림</td>
							</tr>
							<tr>
								<th>번호</th>
								<td>감사실-415</td>
							</tr>
							<tr>
								<th>날짜</th>
								<td>`24.6.16</td>
							</tr>
							<tr>
								<th>내용</th>
								<td></td>
							</tr>
							<tr><td colspan="2">1. 감사실-111 "2024년도 감사 착안사항 심사 계획"<br/><br/>2. 위 관련 감사 착안사항 심사결과를 다음과 같이 알립니다.</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</article>
	)
}

export default SearchPage;