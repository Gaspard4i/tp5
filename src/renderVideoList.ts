import renderElement from './renderElement.js';
import renderVideoItem from './renderVideoItem.js';
import { Video } from './types.js';

export default function renderVideoList( videos:Video[] ) {
	return renderElement(
		'div',
		{ name: 'class', value: 'videoList' },
		videos.map( video => renderVideoItem( video ) )
	);
};