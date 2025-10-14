import renderElement from './renderElement.ts';
import renderImg from './renderImg.ts';
import type { Video } from './types.ts';

// arrow function et destructuring 😍
export default ( { title, description, file, thumbnail }:Video ) =>
	// plein d'appels imbriqués 😬
	renderElement( 'a', { name: 'href', value: `./uploads/${file}` }, [
		renderImg( `https://unsplash.uidlt.fr/${thumbnail}/600x340` ),
		renderElement( 'section', { name: 'class', value: 'infos' }, [
			renderElement( 'h4', null, title ),
			renderElement( 'p', null, description ),
		] ),
	] );
