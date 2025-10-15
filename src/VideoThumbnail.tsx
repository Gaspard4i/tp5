import type { Video } from './types';

interface Props {
	video: Video;
	onClick: (id: number) => void;
}

const VideoThumbnail = ({
	video: { id, title, description, thumbnail, file }, // nested destructuring !
	onClick, // une prop peut être une fonction définie dans le composant parent !
}: Props) => (
	<a
		href={`./uploads/${file}`}
		onClick={event => {
			event.preventDefault();
			onClick(id); // on appelle la fonction passée dans les props
		}}
	>
		<img src={`https://unsplash.uidlt.fr/${thumbnail}/600x340`} />
		<section className="infos">
			<h4>{title}</h4>
			<p>{description}</p>
		</section>
	</a>
);

export default VideoThumbnail;
