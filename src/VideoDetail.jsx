import { useEffect, useRef, useState } from 'react';
import data from './data';

export default function VideoDetail({ navigate, params: { id } }) {
	// gestion des infos de la vidéo
	const [video, setVideo] = useState(null);
	useEffect(() => {
		const selectedVideo = data.find(video => video.id === id);
		setVideo(selectedVideo);
	}, []);

	// gestion des likes/dislike
	function handleLikeClick() {
		setVideo({ ...video, likes: video.likes + 1 });
	}
	function handleDislikeClick() {
		setVideo({ ...video, dislikes: video.dislikes + 1 });
	}

	// gestion player
	const player = useRef(null);
	function handlePlayClick() {
		player.current.play();
	}
	function handlePauseClick() {
		player.current.pause();
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
				ref={player}
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
		</div>
	);
}
