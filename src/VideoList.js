import Page from './Page.js';
import VideoItem from './VideoItem.js';

export default class VideoList extends Page {
	#videos;

	constructor(videos) {
		super('Recommandations', 'videoList');
		this.videos = videos;
	}

	set videos(value) {
		this.#videos = value;
		this.children = this.#videos.map(video => new VideoItem(video));
	}
}
