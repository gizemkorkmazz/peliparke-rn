import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Constants, SecureStoreKeys } from './../helpers/Constans';
import { SecureStore } from 'expo';
import Page from '../components/common/Page';

class LoginPage extends Component {
	mobilePhone = '5466781325';
	password = '1234';

	async componentWillReceiveProps(nextProps) {
		if (nextProps.token && nextProps.token !== this.props.token) {
			var mp = await SecureStore.setItemAsync(SecureStoreKeys.MobilePhone, this.mobilePhone);
			var pass = await SecureStore.setItemAsync(SecureStoreKeys.Password, this.password);
		}
	}

	render() {
		return (
			<Page title="Giriş Yap">
				<Text>Login Page</Text>
				<Button
					title="Get Token"
					onPress={() => {
						this.props.fetchToken(this.mobilePhone, this.password, Constants.MallCode);
					}}
				/>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	const { token, isTokenLoading, tokenError } = state.token;
	return { token, isTokenLoading, tokenError };
};

export default connect(mapStateToProps, { fetchToken })(LoginPage);
