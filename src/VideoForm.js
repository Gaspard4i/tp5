import React, { Component } from 'react';

export default class VideoForm extends Component {
	state = {
		isLoading: false,
	};
	titleInput = null;
	descriptionInput = null;
	thumbnailInput = null;

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ isLoading: true });
		const body = JSON.stringify({
			title: this.titleInput.value,
			description: this.descriptionInput.value,
			thumbnail: this.thumbnailInput.value,
		});
		fetch(`http://localhost:8080/api/videos`, { method: 'POST', body })
			.then(response => response.json())
			.then(({ id }) => this.props.push('detail', { id }));
	}

	render() {
		return (
			<form className="videoForm" onSubmit={event => this.handleSubmit(event)}>
				<label htmlFor="title">Titre</label>
				<input
					required
					type="text"
					id="title"
					ref={el => (this.titleInput = el)}
				/>
				<label htmlFor="description">Description</label>
				<textarea
					required
					id="description"
					cols="30"
					rows="10"
					ref={el => (this.descriptionInput = el)}
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
				<input
					required
					type="text"
					id="thumbnail"
					ref={el => (this.thumbnailInput = el)}
				/>
				<button type="submit" disabled={this.state.isLoading}>
					{!this.state.isLoading ? 'Envoyer' : 'Loading...'}
				</button>
			</form>
		);
	}
}
