import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signoutAction } from './../../reducers/sign';

class NavigationContainer extends Component {
	onSignoutClick() {
		this.props.signoutAction();
	}

	render() {
		const currentUser = this.props.user;

		return (
			<div className="header">
				<div>
					<Link className="link" to="/">Main</Link>
				</div>
				{!currentUser &&
					<div>
						<Link className="link" to="/signin">Sign in</Link>
						<Link className="link" to="/signup">Sign up</Link>
					</div>
				}
				{currentUser &&
					<div>
						<a href="javascript:void(0)"
							onClick={() => this.onSignoutClick()}
							className="link"
						>
							Sign out
						</a>
					</div>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.sign });
const mapDispatchToProps = (dispatch) => bindActionCreators({ signoutAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);