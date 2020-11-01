import { render } from 'react-dom';
import Menu from './Menu';
import Navigator from './Navigator';
import VideoList from './VideoList';

render(
	<>
		<Menu />
		<Navigator />
	</>,
	document.querySelector('.appContainer')
);
