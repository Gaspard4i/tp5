import { useEffect, useState } from 'react';
import data from './data';

export default function VideoDetail() {
	// gestion des infos de la vidéo
	const [video, setVideo] = useState(null);
	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * data.length);
		setVideo(data[randomIndex]);
	}, []);

	// gestion des likes/dislike
	function handleLikeClick() {
		setVideo({ ...video, likes: video.likes + 1 });
	}
	function handleDislikeClick() {
		setVideo({ ...video, dislikes: video.dislikes + 1 });
	}

	// premier render sans vidéo
	if (!video) {
		return <div className="videoDetail is-loading"></div>;
	}
	// render suivants avec une vidéo renseignée dans le state
	const { title, description, file, likes, dislikes } = video;
	return (
		<div className="videoDetail">
			<video
				style={{ width: '100%', backgroundColor: 'black' }}
				height="400"
				controls
				src={'./uploads/' + file}
			></video>
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
