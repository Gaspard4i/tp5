import data from './data.ts';
import renderElement from './renderElement.ts';
import renderVideoList from './renderVideoList.ts';

const title = renderElement( 'h1', null, ['Vos', ' ', 'recommandations'] );
document.querySelector('.container > header')!.innerHTML = title;

const videoList = renderVideoList(data);
document.querySelector( '.page' )!.innerHTML = videoList;