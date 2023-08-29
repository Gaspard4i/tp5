import { useEffect, useState } from 'react';
import data from './data';
import VideoThumbnail from './VideoThumbnail';

export default function VideoList({ navigate }) {
	const [videos, setVideos] = useState([]);

	// après le premier render simulation d'un chargement AJAX
	useEffect(() => {
		const timeout = setTimeout(() => setVideos(data), 500);
		// la fonction de cleanup est appelée si le composant est démonté ou si l'effect est relancé
		return () => clearTimeout(timeout);
	}, []);

	const classNames = `videoList ${videos?.length ? '' : 'is-loading'}`;
	return (
		<div className="container">
			<header>
				<h1>Recommandations</h1>
			</header>
			<div className={classNames}>
				{videos.map(video => (
					<VideoThumbnail
						onClick={() => navigate('detail', { id: video.id })}
						video={video}
						key={video.id}
					/>
				))}
			</div>
		</div>
	);
}
