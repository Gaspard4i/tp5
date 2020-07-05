import { render } from 'react-dom';
import React from 'react';
import VideoDetail from './VideoDetail';
import Menu from './Menu';

render(
	<>
		<Menu />
		<VideoDetail />
	</>,
	document.querySelector('.appContainer')
);
