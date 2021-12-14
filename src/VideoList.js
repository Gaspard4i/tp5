import { Component } from 'react';
import data from './data';
import VideoThumbnail from './VideoThumbnail';

export default class VideoList extends Component {
	state = {
		videos: [],
	};
	componentDidMount() {
		setTimeout(() => this.setState({ videos: data }), 500);
	}
	render() {
		const { videos } = this.state,
			classNames = `videoList ${videos?.length ? '' : 'is-loading'}`;

		return (
			<div className="container">
				<header>
					<h1>Recommandations</h1>
				</header>
				<div className={classNames}>
					{videos.map(video => (
						<VideoThumbnail
							onClick={() => this.props.navigate('detail', { id: video.id })}
							video={video}
							key={video.id}
						/>
					))}
				</div>
			</div>
		);
	}
}
