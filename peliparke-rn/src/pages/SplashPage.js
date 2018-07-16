import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken, fetchMemberInfo } from 'apollo-rn-redux-helper/src/actions';
import { SecureStore } from 'expo';

import { SecureStoreKeys, Constants } from './../helpers/Constans';

class SplashPage extends Component {
	isPageReady = null;
	isLoginSuccess = false;

	async componentDidMount() {
		this.mobilePhone = await SecureStore.getItemAsync(SecureStoreKeys.MobilePhone);
		this.password = await SecureStore.getItemAsync(SecureStoreKeys.Password);
		if (!this.mobilePhone || !this.password) {
			try {
				await this.deleteItems();
			} catch (error) {
			} finally {
				this.props.navigation.navigate('cinema');
				return;
			}
		}
		// this.props.fetchToken(this.mobilePhone, this.password, Constants.MallCode);
	}

	async componentWillReceiveProps(nextProps) {
		try {
			if (nextProps.token && this.props.token !== nextProps.token) {
				this.props.fetchMemberInfo(Constants.MallCode, this.mobilePhone);
			} else if (
				nextProps.tokenError &&
				this.props.tokenError !== nextProps.tokenError &&
				this.props.isTokenLoading
			) {
				await this.deleteItems();
				this.isPageReady = true;
				this.isLoginSuccess = false;
			}
			if (nextProps.member && this.props.member !== nextProps.member) {
				this.isPageReady = true;
				this.isLoginSuccess = true;
			} else if (nextProps.error && this.props.error !== nextProps.error && this.props.isLoading) {
				await this.deleteItems();
				this.isPageReady = true;
				this.isLoginSuccess = false;
			}
		} catch (error) {
			this.props.navigation.navigate('cinema');
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.isPageReady && !this.isLoginSuccess) {
			this.props.navigation.navigate('activity');
		}
		if (this.isPageReady && this.isLoginSuccess) {
			this.props.navigation.navigate('profile');
		}
	}

	async deleteItems() {
		await SecureStore.deleteItemAsync(SecureStoreKeys.MobilePhone);
		await SecureStore.deleteItemAsync(SecureStoreKeys.Password);
	}
	render() {
		return (
			<View>
				<Text>Yükleniyor...</Text>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const { token, isTokenLoading, tokenError } = state.token;
	const { isLoading, member, error } = state.member;
	return { token, isTokenLoading, tokenError, isLoading, member, error };
};

export default connect(mapStateToProps, { fetchToken, fetchMemberInfo })(SplashPage);
