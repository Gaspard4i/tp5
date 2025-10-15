import { useEffect, useState, type MouseEvent } from 'react';
import data from './data';
import { Video } from './types';

function openPopup(url: string, width: number, height: number) {
	const top = (window.screen.height - height) / 2,
		left = (window.screen.width - width) / 2,
		windowFeatures = `popup=true,width=${width},height=${height},top=${top},left=${left}`;
	window.open(url, 'reactubePopup', windowFeatures);
}

export default function VideoList() {
	const [videos, setVideos] = useState<Video[]>([]);

	// après le premier render simulation d'un chargement AJAX
	useEffect(() => {
		const timeout = setTimeout(() => setVideos(data), 500);

		// la fonction qu'on retourne est une fonction de "cleanup",
		// elle est appelée automatiquement quand le composant est démonté
		// ou si l'effect est relancé :
		return () => clearTimeout(timeout);
	}, []); // le tableau de dépendances vide permet que l'effect ne se lance qu'après le premier render !

	function handleClick(event: MouseEvent<HTMLAnchorElement>) {
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
						<img src={`https://unsplash.uidlt.fr/${thumbnail}/600x340`} />
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
