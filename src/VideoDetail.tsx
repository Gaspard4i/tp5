import { useEffect, useState } from 'react';
import CommentList from './CommentList';
import data from './data';
import type { Video } from './types';
import type { PageProps } from './Navigator'; // <-- attention dépendance croisée, VideoDetail <-> Navigator, c'est mal
import VideoPlayer from './VideoPlayer';

export default function VideoDetail({ navigate, params: { id } }: PageProps) {
	// gestion des infos de la vidéo
	const [video, setVideo] = useState<Video | null>(null);
	useEffect(() => {
		const selectedVideo = data.find(video => video.id === id);
		setVideo(selectedVideo || null);
	}, []);

	// gestion des likes/dislike
	function handleLikeClick() {
		if (video) {
			setVideo({ ...video, likes: video.likes + 1 });
		}
	}
	function handleDislikeClick() {
		if (video) {
			setVideo({ ...video, dislikes: video.dislikes + 1 });
		}
	}
	// bouton retour
	function handleBackPress() {
		navigate('list');
	}

	// premier render sans vidéo
	if (!video) {
		return <div className="videoDetail is-loading"></div>;
	}
	// render suivants avec une vidéo renseignée dans le state
	const { title, description, file, likes, dislikes } = video;
	return (
		<div className="videoDetail">
			<button className="backButton" onClick={handleBackPress}>
				&lt; Retour
			</button>
			<VideoPlayer file={file} />
			<header>
				<h1>{title}</h1>
				<div className="likesContainer">
					<button className="like" onClick={handleLikeClick}>
						{likes}
					</button>
					<button className="dislike" onClick={handleDislikeClick}>
						{dislikes}
					</button>
				</div>
			</header>
			{description && <p>{description}</p>}
			<CommentList />
		</div>
	);
}
