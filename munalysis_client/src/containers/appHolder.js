import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../components/app';
import AuthPage from '../components/auth';
import ThinkingPage from '../components/thinkPage';

class AppHolder extends Component {
	constructor(props) {
		super(props);
		this.renderApp = this.renderApp.bind(this);
		this.renderLogin = this.renderLogin.bind(this);
		this.state = {
			hasCheckedLoginStatus: false
		};
	}
	componentDidMount() {
		this.props.checkAuthenticationStatus();
	}
	renderApp() {
		return <App />;
	}
	renderLogin() {
		if (this.state.hasCheckedLoginStatus) {
			return <AuthPage />;
		} else {
			return <ThinkingPage />;
		};
	}
	render() {
		return (
			<div>
				{(this.props.authenticated) ? this.renderApp() : this.renderLogin()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.authenticated
	};
}

export default connect(mapStateToProps, actions)(AppHolder);
