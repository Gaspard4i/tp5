import { useState } from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// import VideoForm from './VideoForm';

export default function Navigator() {
	const [{ currentPage, params }, setState] = useState({
		currentPage: 'list',
		params: {},
	});

	function navigate(newPage, newParams = {}) {
		setState({ currentPage: newPage, params: newParams });
	}

	switch (currentPage) {
		case 'list':
			return <VideoList navigate={navigate} params={params} />;
		case 'detail':
			return <VideoDetail navigate={navigate} params={params} />;
		case 'form':
			return <VideoForm navigate={navigate} params={params} />;
	}
	return null;
}
