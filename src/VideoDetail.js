import { createRef, Component } from 'react';
import CommentForm from './CommentForm';
import CommentRenderer from './CommentRenderer';

export default class VideoDetail extends Component {
	state = {
		video: null,
		comments: [],
	};
	player = createRef();

	componentDidMount() {
		this.fetchDetail();
		this.fetchComments();
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	}

	fetchDetail() {
		fetch(`http://localhost:8080/api/videos/${this.props.params.id}`)
			.then(response => response.json())
			.then(video => this.setState({ video }));
	}

	fetchComments() {
		fetch(`http://localhost:8080/api/videos/${this.props.params.id}/comments`)
			.then(response => response.json())
			.then(comments => this.setState({ comments }));
	}

	render() {
		const { video, comments } = this.state;
		if (!video) {
			return <div className="videoDetail is-loading"></div>;
		}
		const { title, description, file, likes, dislikes } = video;
		return (
			<div className="videoDetail">
				<button className="backButton" onClick={() => this.props.navigate('list')}>
					&lt; Retour
				</button>
				<video
					style={{ width: '100%', backgroundColor: 'black' }}
					height="400"
					controls
					src={'./uploads/' + file}
					ref={this.player}
				></video>
				<button onClick={() => this.player.current.play()}>play</button>
				<button onClick={() => this.player.current.pause()}>pause</button>
				<header>
					<h1>{title}</h1>
					<div className="likesContainer">
						<button className="like" onClick={() => this.handleLikeClick()}>
							{likes}
						</button>
						<button
							className="dislike"
							onClick={() => this.handleDislikeClick()}
						>
							{dislikes}
						</button>
					</div>
				</header>
				{description && <p>{description}</p>}
				<aside className="commentList">
					{comments.length > 0 && <h2>{comments.length} commentaires</h2>}
					<CommentForm onSubmit={this.handleCommentSubmit} />
					{comments.map(comment => (
						<CommentRenderer comment={comment} key={comment.id} />
					))}
				</aside>
			</div>
		);
	}

	handleLikeClick() {
		fetch(`http://localhost:8080/api/videos/${this.props.params.id}/likes`, {
			method: 'POST',
		}).then(() => this.fetchDetail());
	}

	handleDislikeClick() {
		fetch(`http://localhost:8080/api/videos/${this.props.params.id}/dislikes`, {
			method: 'POST',
		}).then(() => this.fetchDetail());
	}

	handleCommentSubmit(newComment) {
		return fetch(
			`http://localhost:8080/api/videos/${this.props.params.id}/comments`,
			{
				method: 'POST',
				body: JSON.stringify(newComment),
			}
		).then(() => this.fetchComments());
	}
}
