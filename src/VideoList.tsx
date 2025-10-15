import { useEffect, useState } from 'react';
import data from './data';
import type { Video } from './types';
import VideoThumbnail from './VideoThumbnail';
import type { PageProps } from './Navigator'; // <-- attention dépendance croisée, VideoList <-> Navigator, c'est mal

export default function VideoList({ navigate }: PageProps) {
	const [videos, setVideos] = useState<Video[]>([]);

	// après le premier render simulation d'un chargement AJAX
	useEffect(() => {
		const timeout = setTimeout(() => setVideos(data), 500);

		// la fonction qu'on retourne est une fonction de "cleanup",
		// elle est appelée automatiquement quand le composant est démonté
		// ou si l'effect est relancé :
		return () => clearTimeout(timeout);
	}, []); // le tableau de dépendances vide permet que l'effect ne se lance qu'après le premier render !

	// gestion click thumbnail
	function handleThumbnailClick(id: number) {
		navigate('detail', { id }); // { id } = { id: id }
	}

	const classNames = `videoList ${videos?.length ? '' : 'is-loading'}`;
	return (
		<div className="container">
			<header>
				<h1>Recommandations</h1>
			</header>
			<div className={classNames}>
				{videos.map(video => (
					<VideoThumbnail
						onClick={handleThumbnailClick} // onClick est une prop "custom" de VideoThumbnail
						video={video}
						key={video.id}
					/>
				))}
			</div>
		</div>
	);
}
