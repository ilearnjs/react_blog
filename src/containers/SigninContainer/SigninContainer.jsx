import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { signin, stateReset } from '../../reducers/sign';

class SigninContainer extends Component {
	state = {
		userName: '',
		password: ''
	};

	componentWillUnmount() {
		this.props.stateReset();
	}

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

		this.props.signin(this.state.userName, this.state.password);
	}

	render() {
		if (this.props.user) {
			return <Redirect to="/" />
		}
		return (
			<div className="sign-form">
				<div className="sign-header">
					Sign in
				</div>
				{this.props.error &&
					<div className="sign-error">
						{this.props.error.userMessage}
					</div>
				}
				<div className="sign-input-container">
					<label
						className="sign-label"
						htmlFor="user-name"
					>
						User name
					</label>
					<input
						id="user-name"
						className="sign-input"
						type="text"
						value={this.state.userName}
						onChange={(e) => this.onUserNameChanged(e)}
					>
					</input>
				</div>
				<div className="sign-input-container">
					<label
						className="sign-label"
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="sign-input"
						type="password"
						value={this.state.password}
						onChange={(e) => this.onPasswordChanged(e)}
					>
					</input>
				</div>
				<button
					className="sign-button"
					onClick={() => this.onSigninClick()}
				>
					Sign In
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.sign });
const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ signin, stateReset }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);