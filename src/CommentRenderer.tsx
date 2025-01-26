import { Comment } from './types';

interface Props {
	comment: Comment;
}

export default function CommentRenderer({
	comment: { created_at, content },
}: Props) {
	const date = new Date(created_at);
	return (
		<article className="commentRenderer">
			<time dateTime={created_at}>
				Le {date.toLocaleDateString()} à {date.toLocaleTimeString()}
			</time>
			<p>{content}</p>
		</article>
	);
}
