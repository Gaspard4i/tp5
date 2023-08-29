import { useEffect, useState } from 'react';
import data from './data';

export default function VideoList() {
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
				{videos.map(({ id, title, description, thumbnail, file }) => (
					<a href={`./uploads/${file}`} key={id}>
						<img src={`https://source.unsplash.com/${thumbnail}/600x340`} />
						<section className="infos">
							<h4>{title}</h4>
							<p>{description}</p>
						</section>
					</a>
				))}
			</div>
		</div>
	);
}
