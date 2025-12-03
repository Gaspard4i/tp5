import type { FormEvent } from 'react';

export default function CommentForm() {
	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		alert('Ajout de commentaire !');
	}
	return (
		<form className="commentForm" onSubmit={handleSubmit}>
			<textarea
				name="content"
				rows={2}
				placeholder="Ajouter un commentaire public"
			/>
			<button type="submit">Envoyer</button>
		</form>
	);
}
