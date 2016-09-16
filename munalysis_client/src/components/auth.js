import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class AuthPage extends Component {
	render() {
		return <div>In the auth page!</div>;
	}
}

// function mapStateToProps(state) {
// 	return { authenticated: state.auth.authenticated };
// }

// export default connect(mapStateToProps)(AuthPage);

export default AuthPage;