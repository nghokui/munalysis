import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './searchBar';

class Selector extends Component {
	componentDidMount() {
		console.log(this.props.results);
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}
	render() {
		return (
			<div className="container">
				<SearchBar />
			</div>
		);
	}
}


function mapStateToProps({ results }){
	return { results };
}


export default connect(mapStateToProps)(Selector);