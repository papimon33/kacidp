import React from 'react';
import '../styles/form.css'

function Form() {

	return (
		<div className="form">
			<h2 className="title pt-5">취합 요청</h2>	
			<div className="">
				<h3 className="subtitle">#기본정보</h3>
				<div className="card">
					<div className="card-content">
				<div className='field'>
					<label className="label">업무명</label>
					<div className="control">
						<input className="input" type="text" value="전국 공항 상/하반기 여객 현황 자료 취합 요청 업무" />
					</div>
				</div>
				<div className='field'>
					<label className="label">설명</label>
					<div className="control">
						<textarea className="textarea" value="전국공항 상/하반기 여객 현황 자료 취합요청입니다."/>
					</div>
				</div>
				<div className='field'>
					<label className="label">등록자</label>
					<div className="control">
						<input className="input" type="text" value="전략기획본부 데이터융합부 박종균" disabled />
					</div>
				</div>
				<div className='field'>
					<label className="label">담당부서</label>
					<div className="control">
						<input className="input" type="text" value="데이터융합부" disabled />
					</div>
				</div>
				<div className='field'>
					<label className="label">공개여부</label>
					<div className="control">
						<label class="radio">
							<input type="radio" name="question" />
							&nbsp;공개
						</label>
						<label class="radio">
							<input type="radio" name="question"/>
							 &nbsp;비공개
						</label>
					</div>
					</div>			
				</div>
				</div>
				<h3 className="subtitle"># 취합 요청 정보 </h3>
				<div className='field'>
					<label className="label">요청명</label>
					<div className="control">
						<input className="input" type="text" value="데이터융합부" disabled />
					</div>
				</div>
				<div className='field'>
					<label className="label">담당자</label>
					<div class="input pt-5 pb-5">
						<p className="buttons">
							<button class="button is-small ">
								<span>박종균</span>
								<span class="icon is-small"><i class="fas fa-times"></i></span>
							</button>
							<button class="button is-small">
								<span>김민섭</span>
								<span class="icon is-small"><i class="fas fa-times"></i></span>
							</button>
							<button class="button is-small">
								<span>김미미</span>
								<span class="icon is-small"><i class="fas fa-times"></i></span>
							</button>
							<input type="text" style={{border:"none"}}></input>
						</p>
					</div>
				</div>
				<div className='field'>
					<label className="label">제출기한</label>
					<div className="control">
						<input className="input" type="date"/>
					</div>
				</div>
				<div className="field">
					<Table/>
				</div>

				<h3 className="subtitle"># 양식 탬플릿</h3>
				<div className=''>
					<div className="field is-grouped">
						<input className="input" type="date"/>
						<input className="input is-right" type="date"/>
						<input className="input" type="date"/>
					</div>
				</div>
				<div className='field'>
					<div class="card">
						<div class="card-image">
							<figure class="image is-3by1 has-text-centered">
								ddd
							</figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function Field({label}) {
	return(
		<div className="field">
			<label className="label">dd</label>	
			<input type="text" className="input" />
		</div>
	)
}

function Table() {
	const data = ["2022년 전국공항 상하반기 여객현황(제주)", "데이터융합부", "박종균", "2022-01-01", "2022-02-02", "2022-03-03", "요청-제출-취합-마감"];
	return (
		<table className="table is-fullwidth">
			<thead>
				<tr>
					<th>취합요청명</th>
					<th>담당부서</th>
					<th>담당자</th>
					<th>요청일</th>
					<th>제출기한</th>
					<th>제출일</th>
					<th>진행상황</th>
				</tr>
			</thead>	
			<tbody>
				{Array.from({ length: 10 }).map((_, rowIndex) => (
					<tr key={rowIndex}>
						{data.map((item, cellIndex) => (
							<td key={cellIndex}>{item}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
export default Form;