import React from 'react';
import ColorPicker from '@rc-component/color-picker';
import '@rc-component/color-picker/assets/index.css';
import {useState, useEffect} from 'react';


function Home({color, setColor, setTextColor}) {

	let hexString = useState(null);

	const onColorChange = (a) => {
		setColor(a.toHexString());
	}

	const onTextColorChange = (e) => {
		console.log(e.target.checked);
		setTextColor(e.target.checked ? "#000000" : "#ffffff");
	}

	return (
		<div style={{paddingLeft:'2em'}}>
			<ColorPicker onChange={onColorChange} value="#1d4d69"/>
			<div id="colorstring">{color}</div>
			<div>
				<input type="checkbox" id="chk" onChange={onTextColorChange}/>
				<label for ="chk">텍스트컬러 흑/백</label>
			</div>
		</div>
	)

}

export default Home;
