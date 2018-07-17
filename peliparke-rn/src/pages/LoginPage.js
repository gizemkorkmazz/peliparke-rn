import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../helpers';
import { Button } from '../../node_modules/react-native-paper';

class LoginPage extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'red' }}>
				<ImageBackground source={require('../../assets/loginBG.jpg')} style={styles.loginBackgroundImage}>
					<View style={styles.logoContainer}>
						<Image source={require('../../assets/logo.png')} style={styles.logo} />
					</View>

					<View style={[styles.loginInformation, { marginBottom: widthPercentageToDP('4%') }]}>
						<Image
							source={require('../../assets/inputKullaniciAdi-KartNo-vs..png')}
							style={styles.textInputImage}
						/>
						<TextInput
							keyboardType="numeric"
							placeholder="Cep Tel / Kart No"
							placeholderTextColor={Colors.LoginPagePlaceholderTextColor}
							underlineColorAndroid={Colors.LoginPageTextInputBackgroundColor}
							style={styles.textInput}
						/>
					</View>
					<View style={styles.loginInformation}>
						<Image source={require('../../assets/inputSifre.png')} style={styles.textInputImage} />
						<TextInput
							keyboardType="numeric"
							placeholder="Şifre"
							placeholderTextColor={Colors.LoginPagePlaceholderTextColor}
							underlineColorAndroid={Colors.LoginPageTextInputBackgroundColor}
							style={styles.textInput}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<Button
							raised
							style={styles.loginButton}
							dark={true}
							onPress={() => {
								this.props.navigation.navigate('app');
							}}
						>
							GİRİŞ YAP
						</Button>
						<Button raised style={styles.registerButton} dark={true} onPress={() => {}}>
							YENİ ÜYE OL
						</Button>
						{/* <Button
							title="YENİ ÜYE OL"
							color={Colors.RegisterButtonColor}
							onPress={() => {
								// this.props.navigation.navigate('app');
							}}
						/> */}
					</View>
					<Button raised style={styles.forgotPasswordButton} onPress={() => {}}>
						ŞİFREMİ UNUTTUM
					</Button>
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
	loginInformation: {
		flexDirection: 'row',
		padding: '3%',
		height: '9%',
		marginHorizontal: widthPercentageToDP('4%'),
		backgroundColor: Colors.LoginPageTextInputBackgroundColor
	},
	textInputImage: {
		resizeMode: 'contain',
		width: '5%'
	},
	textInput: {
		flex: 1,
		paddingLeft: widthPercentageToDP('3%'),
		height: heightPercentageToDP('6%')
	},
	buttonContainer: {
		margin: widthPercentageToDP('3%')
	},
	loginButton: {
		marginBottom: widthPercentageToDP('4%'),
		paddingVertical: widthPercentageToDP('2.8%'),
		backgroundColor: Colors.LoginButtonColor
	},
	registerButton: {
		paddingVertical: widthPercentageToDP('2.8%'),
		backgroundColor: Colors.RegisterButtonColor
	},
	forgotPasswordButton: {
		opacity: 0.7,
		backgroundColor: Colors.ForgotPasswordButton,

		marginHorizontal: widthPercentageToDP('26%')
	}
});
const mapStateToProps = state => {
	const { token, isTokenLoading, tokenError } = state.token;
	return { token, isTokenLoading, tokenError };
};

export default connect(mapStateToProps, { fetchToken })(LoginPage);
