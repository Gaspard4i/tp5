import { createRoot } from 'react-dom/client';
import Menu from './Menu';
import Navigator from './Navigator';

const root = createRoot(document.querySelector('.appContainer'));
root.render(
	<>
		<Menu />
		<Navigator />
	</>
);
