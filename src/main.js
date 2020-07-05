import data from './data';
import VideoList from './VideoList';
import PageRenderer from './PageRenderer';

PageRenderer.titleElement = document.querySelector('.container > header');
PageRenderer.contentElement = document.querySelector('.page');

const videoList = new VideoList([]);
PageRenderer.renderPage(videoList); // affiche une page vide
videoList.videos = data;
PageRenderer.renderPage(videoList); // affiche la liste des vidéos
