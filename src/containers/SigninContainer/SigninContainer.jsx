import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signinAction } from '../../reducers/sign';

class SigninContainer extends Component {
	state = {
		userName: '',
		password: ''
	};

	onUserNameChanged(e) {
		this.setState({
			userName: e.target.value,
			password: this.state.password
		});
	}

	onPasswordChanged(e) {
		this.setState({
			userName: this.state.userName,
			password: e.target.value,
		});
	}

	onSigninClick() {
		if (!this.state.userName || !this.state.password) {
			return;
		}

		this.props.signinAction(this.state.userName, this.state.password);
	}

	render() {
		if(this.props.user) {
			return <Redirect to="/"/>
		}
		return (
			<div className="log-in-form">
				<div className="user-name-container">
					<label className="user-name-label" htmlFor="user-name">
						User name
					</label>
					<input
						id="user-name"
						className="user-name-input"
						type="text"
						value={this.state.userName}
						onChange={(e) => this.onUserNameChanged(e)}
					>
					</input>
				</div>
				<div className="password-container">
					<label className="password-label" htmlFor="password">
						Password
					</label>
					<input
						className="password-input"
						type="password"
						value={this.state.password}
						onChange={(e) => this.onPasswordChanged(e)}
					>
					</input>
				</div>
				<button onClick={() => this.onSigninClick()}>
					Sign In
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.sign });
const mapDispatchToProps = (dispatch) => bindActionCreators({ signinAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);