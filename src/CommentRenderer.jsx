export default function CommentRenderer({ comment: { created_at, content } }) {
	const date = new Date(created_at);
	return (
		<article className="commentRenderer">
			<time dateTime={created_at}>
				Le sq{date.toLocaleDateString()} à {date.toLocaleTimeString()}
			</time>
			<p>{content}</p>
		</article>
	);
}
