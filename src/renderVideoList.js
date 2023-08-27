import renderElement from './renderElement.js';
import renderVideoItem from './renderVideoItem.js';

export default function renderVideoList( videos ) {
	return renderElement(
		'div',
		{ name: 'class', value: 'videoList' },
		videos.map( video => renderVideoItem( video ) )
	);
};