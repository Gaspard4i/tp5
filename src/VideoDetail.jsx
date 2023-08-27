import data from './data';

export default function VideoDetail() {
	const randomIndex = Math.floor(Math.random() * data.length),
		{ title, description, file } = data[randomIndex];

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
		</div>
	);
}
