import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../helpers';
import { Button } from '../../node_modules/react-native-paper';
import FullWidthButton from './../components/common/FullWidthButton';
import TextInputComponent from './../components/common/TextInputComponent';
import RaisedButton from '../components/login/RaisedButton';
const loginTextInput = [
	{
		textInputImageSource: require('../../assets/inputKullaniciAdi-KartNo-vs..png'),
		textInputPlaceholder: 'Cep Tel / Kart No'
	},
	{
		textInputImageSource: require('../../assets/inputSifre.png'),
		textInputPlaceholder: 'Şifre'
	}
];
class LoginPage extends Component {
	renderTextInput() {
		return loginTextInput.map((item, index) => {
			return (
				<TextInputComponent
					textInputImageSource={item.textInputImageSource}
					textInputPlaceholder={item.textInputPlaceholder}
					key={index}
					textInputBackgroundColor={Colors.LoginPageTextInputBackgroundColor}
				/>
			);
		});
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'red' }}>
				<ImageBackground source={require('../../assets/loginBG.jpg')} style={styles.loginBackgroundImage}>
					<View style={styles.logoContainer}>
						<Image source={require('../../assets/logo.png')} style={styles.logo} />
					</View>
					{this.renderTextInput()}
					<FullWidthButton
						buttonText="GİRİŞ YAP"
						onClick={() => {
							this.props.navigation.navigate('app');
						}}
					/>
					<Button raised style={styles.registerButton} dark={true} onPress={() => {}}>
						YENİ ÜYE OL
					</Button>
					<RaisedButton
						buttonText="ŞİFREMİ UNUTTUM"
						onClick={() => {
							this.props.navigation.navigate('forgotPassword');
						}}
					/>
				</ImageBackground>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	loginBackgroundImage: {
		width: '100%',
		height: '100%'
	},
	logoContainer: {
		backgroundColor: Colors.LoginPageLogoContainerBackgroundColor,
		opacity: 0.9,
		justifyContent: 'center',
		alignItems: 'center',
		height: '15%',
		marginBottom: widthPercentageToDP('32%')
	},
	logo: {
		resizeMode: 'contain',
		width: '90%',
		height: '75%'
	},
	registerButton: {
		paddingVertical: widthPercentageToDP('2%'),
		backgroundColor: Colors.RegisterButtonColor,
		marginHorizontal: widthPercentageToDP('4%'),
		marginBottom: widthPercentageToDP('3%')
	}
});
const mapStateToProps = state => {
	const { token, isTokenLoading, tokenError } = state.token;
	return { token, isTokenLoading, tokenError };
};

export default connect(mapStateToProps, { fetchToken })(LoginPage);
