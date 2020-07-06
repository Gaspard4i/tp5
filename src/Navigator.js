import React from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class Navigator extends React.Component {
	state = {
		currentPage: 'list',
		params: {},
	};

	constructor(...args) {
		super(...args);
		this.push = this.push.bind(this);
	}

	render() {
		switch (this.state.currentPage) {
			case 'list':
				return <VideoList push={this.push} params={this.state.params} />;
				break;
			case 'detail':
				return <VideoDetail push={this.push} params={this.state.params} />;
				break;
		}
		return null;
	}

	push(screen, params = {}) {
		this.setState({ currentPage: screen, params: params });
	}
}
