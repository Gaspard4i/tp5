export default function CommentForm() {
	function handleCommentSubmit(event) {
		event.preventDefault();
		alert('Ajout de commentaire !');
	}
	return (
		<form className="commentForm" onSubmit={handleCommentSubmit}>
			<textarea
				name="content"
				rows="2"
				placeholder="Ajouter un commentaire public"
			/>
			<button type="submit">Envoyer</button>
		</form>
	);
}
