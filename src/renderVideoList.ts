import renderElement from './renderElement.ts';
import renderVideoItem from './renderVideoItem.ts';
import { Video } from './types.ts';

export default function renderVideoList( videos:Video[] ) {
	return renderElement(
		'div',
		{ name: 'class', value: 'videoList' },
		videos.map( video => renderVideoItem( video ) )
	);
};