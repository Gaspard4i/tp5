import { createRoot } from 'react-dom/client';
import Menu from './Menu';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import Navigator from './Navigator';

const root = createRoot(document.querySelector('.appContainer'));
root.render(
	<>
		<Menu />
		{/* <VideoDetail /> */}
		{/* <VideoList /> */}
		<Navigator />
	</>
);
