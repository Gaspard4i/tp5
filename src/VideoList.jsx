import data from './data';

export default function VideoList() {
	return (
		<div className="container">
			<header>
				<h1>Recommandations</h1>
			</header>
			<div className="videoList">
				{data.map(({ id, title, description, thumbnail, file }) => (
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
