import { MouseEvent } from 'react';
import data from './data';

function openPopup(url: string, width: number, height: number) {
	const top = (window.screen.height - height) / 2,
		left = (window.screen.width - width) / 2,
		windowFeatures = `popup=true,width=${width},height=${height},top=${top},left=${left}`;
	window.open(url, 'reactubePopup', windowFeatures);
}

export default function VideoList() {
	function handleClick(event: MouseEvent<HTMLAnchorElement>) {
		event.preventDefault();
		openPopup(event.currentTarget.href, 350, 200);
	}

	return (
		<div className="container">
			<header>
				<h1>Recommandations</h1>
			</header>
			<div className="videoList">
				{data.map(({ id, title, description, thumbnail, file }) => (
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
