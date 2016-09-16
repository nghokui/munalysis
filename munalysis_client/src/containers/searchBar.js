import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchByArtist, fetchByAlbum, fetchByTrack } from '../actions/index';

const SEARCH_TERM = "Search type";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.state = {
			selected: SEARCH_TERM,
			term: ""
		};
	}
	onFormSubmit(e) {
		e.preventDefault();
		if (this.state.selected!=SEARCH_TERM && this.state.term.length > 0) {
			switch (this.state.selected) {
				case 'Artist':
					this.props.fetchByArtist(this.state.term);
					break;
				case 'Album':
					this.props.fetchByAlbum(this.state.term);
					break;
				case 'Track':
					this.props.fetchByTrack(this.state.term);
					break;
			}
		}
	}
	onInputChange(e) {
		this.setState({ term: e.target.value });
	}
	dropdownChange(e) {
		this.setState({ selected: e });
	}

	render() {
		return (
			<div className="row">
				<div className="col-lg-6">
					<div className="input-group">
						<div className="input-group-btn">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								{this.state.selected}
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" onClick={this.dropdownChange.bind(this, 'Artist')}>Artist</a>
								<a className="dropdown-item" onClick={this.dropdownChange.bind(this, 'Album')}>Album</a>
								<a className="dropdown-item" onClick={this.dropdownChange.bind(this, 'Track')}>Track</a>
							</div>
						</div>
						<form onSubmit={this.onFormSubmit} className="input-group">
							<input 
								placeholder="Search for artist, album, or track"
								className="form-control"
								value={this.state.term}
								onChange={this.onInputChange} />
						</form>
						<div className="input-group-btn">
							<button className="btn btn-secondary" type="button" id="submitButton" onClick={this.onFormSubmit}>
								Go
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchByArtist, fetchByAlbum, fetchByTrack
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
