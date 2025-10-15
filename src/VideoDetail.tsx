import { useEffect, useState, type FormEvent } from 'react';
import data, { comments } from './data';
import type { Video } from './types';

export default function VideoDetail() {
	// gestion des infos de la vidéo
	const [video, setVideo] = useState<Video | null>(null);
	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * data.length);
		setVideo(data[randomIndex]);
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
	// gestion formulaire commentaire
	function handleCommentSubmit(event: FormEvent) {
		event.preventDefault();
		alert('Ajout de commentaire !');
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
			<aside className="commentList">
				{comments.length > 0 && <h2>{comments.length} commentaires</h2>}
				<form className="commentForm" onSubmit={handleCommentSubmit}>
					<textarea
						name="content"
						rows={2}
						placeholder="Ajouter un commentaire public"
					/>
					<button type="submit">Envoyer</button>
				</form>
				{comments.map(({ id, created_at, content }) => {
					const date = new Date(created_at);
					return (
						<article key={id} className="commentRenderer">
							<time dateTime={created_at}>
								Le {date.toLocaleDateString()} à {date.toLocaleTimeString()}
							</time>
							<p>{content}</p>
						</article>
					);
				})}
			</aside>
		</div>
	);
}
