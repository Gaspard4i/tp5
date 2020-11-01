import { Component } from 'react';
import data from './data';

const randomIndex = Math.floor(Math.random() * data.length);

export default class VideoDetail extends Component {
	state = {
		video: data[randomIndex],
	};

	// componentDidMount() {
	// 	setInterval(() => this.showNextVideo(), 5000);
	// }

	// showNextVideo() {
	// 	const currentIndex = data.indexOf(this.state.video),
	// 		nextIndex = (currentIndex + 1) % data.length;
	// 	this.setState({
	// 		video: data[nextIndex],
	// 	});
	// }

	render() {
		const { title, description, file, likes, dislikes } = this.state.video;
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
						<button className="like" onClick={() => this.handleLikeClick()}>
							{likes}
						</button>
						<button
							className="dislike"
							onClick={() => this.handleDislikeClick()}
						>
							{dislikes}
						</button>
					</div>
				</header>
				{description && <p>{description}</p>}
			</div>
		);
	}

	handleLikeClick() {
		this.setState({
			video: {
				...this.state.video,
				likes: this.state.video.likes + 1,
			},
		});
	}

	handleDislikeClick() {
		const { video } = this.state;
		this.setState({
			video: {
				...video,
				dislikes: video.dislikes + 1,
			},
		});
	}
}
