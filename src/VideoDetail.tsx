import { useEffect, useRef, useState } from 'react';
import CommentList from './CommentList';
import data from './data';
import { Video } from './types';

export default function VideoDetail({ navigate, params: { id } }) {
	// gestion des infos de la vidéo
	const [video, setVideo] = useState<Video | null>(null);
	useEffect(() => {
		const selectedVideo = data.find(video => video.id === id);
		setVideo(selectedVideo);
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

	// gestion player
	const videoRef = useRef(null);
	function handlePlayClick() {
		videoRef.current.play();
	}
	function handlePauseClick() {
		videoRef.current.pause();
	}

	// premier render sans vidéo
	if (!video) {
		return <div className="videoDetail is-loading"></div>;
	}
	// render suivants avec une vidéo renseignée dans le state
	const { title, description, file, likes, dislikes } = video;
	return (
		<div className="videoDetail">
			<button className="backButton" onClick={() => navigate('list')}>
				&lt; Retour
			</button>
			<video
				style={{ width: '100%', backgroundColor: 'black' }}
				height="400"
				controls
				src={'./uploads/' + file}
				ref={videoRef}
			></video>
			<button onClick={handlePlayClick}>play</button>
			<button onClick={handlePauseClick}>pause</button>
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
