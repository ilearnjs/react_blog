import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import UserInfo from '../../components/UserInfo/UserInfo';
import Aux from '../Auxiliary/Auxiliary';

export default class User extends Component {
	render() {
		return (
			<Aux>
				<UserInfo userName={this.props.match.params.userName} />
				<Posts userName={this.props.match.params.userName} />
			</Aux>
		);
	}
}