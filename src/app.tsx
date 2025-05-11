import { createRoot } from 'react-dom/client';
import Menu from './Menu';
import VideoDetail from './VideoDetail';
// import VideoList from './VideoList';

const root = createRoot(document.querySelector('.appContainer')!);
root.render(
	<>
		<Menu />
		<VideoDetail />
		{/* <VideoList /> */}
	</>
);
