import { useEffect, useState } from 'react';
import data from './data';

function openPopup(url, width, height) {
	const top = (window.screen.height - height) / 2,
		left = (window.screen.width - width) / 2,
		windowFeatures = `popup=true,width=${width},height=${height},top=${top},left=${left}`;
	window.open(url, 'reactubePopup', windowFeatures);
}

export default function VideoList() {
	const [videos, setVideos] = useState([]);

	// après le premier render simulation d'un chargement AJAX
	useEffect(() => {
		const timeout = setTimeout(() => setVideos(data), 500);
		// la fonction de cleanup est appelée si le composant est démonté ou si l'effect est relancé
		return () => clearTimeout(timeout);
	}, []);

	function handleClick(event) {
		event.preventDefault();
		openPopup(event.currentTarget.href, 350, 200);
	}

	const classNames = `videoList ${videos?.length ? '' : 'is-loading'}`;
	return (
		<div className="container">
			<header>
				<h1>Recommandations</h1>
			</header>
			<div className={classNames}>
				{videos.map(({ id, title, description, thumbnail, file }) => (
					<a href={`./uploads/${file}`} key={id} onClick={handleClick}>
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
