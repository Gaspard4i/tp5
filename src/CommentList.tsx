import CommentForm from './CommentForm';
import CommentRenderer from './CommentRenderer';
import { comments } from './data';

export default function CommentList() {
	return (
		<aside className="commentList">
			{comments.length > 0 && <h2>{comments.length} commentaires</h2>}
			<CommentForm />
			{comments.map(comment => (
				<CommentRenderer key={comment.id} comment={comment} />
			))}
		</aside>
	);
}
