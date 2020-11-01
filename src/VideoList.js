import { Component } from 'react';
import data from './data';

export default class VideoList extends Component {
	state = {
		videos: [],
	};
	componentDidMount() {
		setTimeout(() => this.setState({ videos: data }), 2000);
	}
	render() {
		const { videos } = this.state,
			classNames = `videoList ${videos?.length ? '' : 'is-loading'}`;

		return (
			<div className="container">
				<header>
					<h1>Recommandations</h1>
				</header>
				<div className={classNames}>{this.renderThumbList()}</div>
			</div>
		);
	}

	renderThumbList() {
		return this.state.videos.map(
			({ id, title, description, thumbnail, file }) => (
				<a href={`./uploads/${file}`} key={id}>
					<img src={`https://source.unsplash.com/${thumbnail}/600x340`} />
					<section className="infos">
						<h4>{title}</h4>
						<p>{description}</p>
					</section>
				</a>
			)
		);
	}
}
