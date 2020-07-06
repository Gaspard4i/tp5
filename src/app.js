import { render } from 'react-dom';
import React from 'react';
import Menu from './Menu';
import Navigator from './Navigator';

render(
	<>
		<Menu />
		<Navigator />
	</>,
	document.querySelector('.appContainer')
);
