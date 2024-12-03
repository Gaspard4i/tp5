import renderElement from "./renderElement";

export default function renderImg( url:string ) {
	return renderElement( 'img', { name: 'src', value: url } );
}