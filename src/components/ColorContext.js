import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({children}) => {
	const [color, setColor] = useState('#ffffff');

	return (
		<ColorContext.Privider value={{color, setColor}}>
			{children}
		</ColorContext.Privider>
	);
};