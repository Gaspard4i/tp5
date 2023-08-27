import data from "./data.js";
import renderElement from "./renderElement.js";
import renderVideoList from "./renderVideoList.js";

const title = renderElement( 'h1', null, ['Vos', ' ', 'recommandations'] );
document.querySelector('.container > header').innerHTML = title;

const videoList = renderVideoList(data);
document.querySelector( '.page' ).innerHTML = videoList;