import Component from './Component';

export default class Page extends Component {
	#title = '';

	constructor(title, className, children) {
		super('section', { name: 'class', value: className }, children);
		this.#title = title;
	}

	renderTitle() {
		return `<h1>${this.#title}</h1>`;
	}
}
