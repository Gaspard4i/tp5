import React from 'react';

export default class VideoDetail extends React.Component {
	state = {
		title: 'Le Top 10 des frameworks JS',
		description: 'Vous n’en croirez pas vos yeux',
		file: 'video1.mp4',
	};

	render() {
		return (
			<div className="videoDetail">
				<video
					style={{ width: '100%', backgroundColor: 'black' }}
					height="300"
					controls
					src={'./uploads/' + this.state.file}
				></video>
				<h1>{this.state.title}</h1>
				<p>{this.state.description}</p>
			</div>
		);
	}
}
