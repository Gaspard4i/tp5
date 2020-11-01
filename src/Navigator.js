import { Component } from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class Navigator extends Component {
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
			case 'detail':
				return <VideoDetail push={this.push} params={this.state.params} />;
		}
		return null;
	}

	push(screen, params = {}) {
		this.setState({ currentPage: screen, params: params });
	}
}
