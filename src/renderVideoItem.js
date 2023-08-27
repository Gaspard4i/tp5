import renderElement from './renderElement.js';
import renderImg from './renderImg.js';

// arrow function et destructuring 😍
export default ( { title, description, file, thumbnail } ) =>
	// plein d'appels imbriqués 😬
	renderElement( 'a', { name: 'href', value: `./uploads/${file}` }, [
		renderImg( `https://source.unsplash.com/${thumbnail}/600x340` ),
		renderElement( 'section', { name: 'class', value: 'infos' }, [
			renderElement( 'h4', null, title ),
			renderElement( 'p', null, description ),
		] ),
	] );
