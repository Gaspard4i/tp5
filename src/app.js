import { render } from 'react-dom';
import Menu from './Menu';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

render(
	<>
		<Menu />
		<VideoDetail />
		{/* <VideoList /> */}
	</>,
	document.querySelector('.appContainer')
);
