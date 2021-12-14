import { createRef, Component } from 'react';

export default class VideoForm extends Component {
	state = {
		isLoading: false,
	};
	titleInput = createRef();
	descriptionInput = createRef();
	thumbnailInput = createRef();

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ isLoading: true });
		const body = JSON.stringify({
			title: this.titleInput.current.value,
			description: this.descriptionInput.current.value,
			thumbnail: this.thumbnailInput.current.value,
		});
		fetch(`http://localhost:8080/api/videos`, { method: 'POST', body })
			.then(response => response.json())
			.then(({ id }) => this.props.navigate('detail', { id }));
	}

	render() {
		return (
			<form className="videoForm" onSubmit={event => this.handleSubmit(event)}>
				<label htmlFor="title">Titre</label>
				<input required type="text" id="title" ref={this.titleInput} />
				<label htmlFor="description">Description</label>
				<textarea
					required
					id="description"
					cols="30"
					rows="10"
					ref={this.descriptionInput}
				></textarea>
				<label htmlFor="thumbnail">
					Vignette
					<small>
						&nbsp;id de l'image sur &nbsp;
						<a href="https://unsplash.com" target="_blank">
							https://unsplash.com
						</a>
					</small>
				</label>
				<input required type="text" id="thumbnail" ref={this.thumbnailInput} />
				<button type="submit" disabled={this.state.isLoading}>
					{!this.state.isLoading ? 'Envoyer' : 'Loading...'}
				</button>
			</form>
		);
	}
}
