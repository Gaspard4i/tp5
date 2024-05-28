const VideoThumbnail = ({
	video: { title, description, thumbnail, file }, // nested destructuring !
	onClick, // une prop peut être une fonction définie dans le composant parent !
}) => (
	<a
		href={`./uploads/${file}`}
		onClick={event => {
			event.preventDefault();
			onClick(); // on appelle la fonction passée dans les props
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
