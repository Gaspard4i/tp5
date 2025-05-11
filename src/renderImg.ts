import renderElement from './renderElement.ts';

export default function renderImg( url:string ) {
	return renderElement( 'img', { name: 'src', value: url } );
}