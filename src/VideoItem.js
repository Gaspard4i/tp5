import Component from './Component.js';
import Img from './Img.js';

export default class VideoItem extends Component {
	constructor({ title, description, thumbnail, file }) {
		super('a', { name: 'href', value: `./uploads/${file}` }, [
			new Img(`https://source.unsplash.com/${thumbnail}/600x340`),
			new Component('section', { name: 'class', value: 'infos' }, [
				new Component('h4', null, title),
				new Component('p', null, description),
			]),
		]);
	}
}
