import type { FormEvent } from 'react';
import data, { comments } from './data';

export default function VideoDetail() {
	const randomIndex = Math.floor(Math.random() * data.length),
		{ title, description, file } = data[randomIndex];

	function handleCommentSubmit(event: FormEvent) {
		event.preventDefault();
		alert('Ajout de commentaire !');
	}

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
