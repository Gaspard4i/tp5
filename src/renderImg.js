import renderElement from "./renderElement";

export default function renderImg( url ) {
	return renderElement( 'img', { name: 'src', value: url } );
}