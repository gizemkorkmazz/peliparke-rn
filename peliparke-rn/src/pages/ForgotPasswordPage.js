import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../helpers';
import { Button } from '../../node_modules/react-native-paper';
const { width, height } = Dimensions.get('window');

class ForgotPasswordPage extends Component {
	render() {
		return (
			<ImageBackground source={require('../../assets/loginBG.jpg')} style={styles.loginBackgroundImage}>
				<View style={styles.logoContainer}>
					<Image source={require('../../assets/logo.png')} style={styles.logo} />
				</View>
				<ScrollView horizontal={true} pagindEnabled={true} ref="myScrollView" scrollEnabled={false}>
					<View style={{ width: width }}>
						<View style={[styles.information, { marginBottom: widthPercentageToDP('2%') }]}>
							<Image source={require('../../assets/inputCeptel.png')} style={styles.textInputImage} />
							<TextInput
								keyboardType="numeric"
								placeholder="Cep Tel"
								placeholderTextColor={Colors.LoginPagePlaceholderTextColor}
								underlineColorAndroid={Colors.LoginPageTextInputBackgroundColor}
								style={styles.textInput}
							/>
						</View>

						<View style={styles.buttonContainer}>
							<Button
								raised
								style={styles.resetCodeButton}
								dark={true}
								onPress={() => {
									this.refs.myScrollView.scrollTo({ x: width, y: 0, animated: true });
								}}
							>
								ŞİFRE SIFIRLAMA KODU GÖNDER
							</Button>
						</View>
						<Button
							raised
							style={styles.goToLoginButton}
							onPress={() => {
								this.props.navigation.navigate('login');
							}}
						>
							LOGİN SAYFASINA DÖN
						</Button>
					</View>
					<View style={{ width: width }}>
						<View style={[styles.information, { marginBottom: widthPercentageToDP('2%') }]}>
							<Image source={require('../../assets/inputSifre.png')} style={styles.textInputImage} />
							<TextInput
								keyboardType="numeric"
								placeholder="Şifre Sıfırlama Kodu"
								placeholderTextColor={Colors.LoginPagePlaceholderTextColor}
								underlineColorAndroid={Colors.LoginPageTextInputBackgroundColor}
								style={styles.textInput}
							/>
						</View>

						<View style={styles.buttonContainer}>
							<Button
								raised
								style={styles.resetCodeButton}
								dark={true}
								onPress={() => {
									this.refs.myScrollView.scrollTo({ x: width * 2, y: 0, animated: true });
								}}
							>
								DEVAM ET
							</Button>
						</View>
						<Button
							raised
							style={styles.goToLoginButton}
							onPress={() => {
								this.refs.myScrollView.scrollTo({ x: 0, y: 0, animated: true });
							}}
						>
							KODU TEKRAR GÖNDER
						</Button>
					</View>
					<View style={{ width: width }}>
						<View style={[styles.information, { marginBottom: widthPercentageToDP('2%') }]}>
							<Image source={require('../../assets/inputSifre.png')} style={styles.textInputImage} />
							<TextInput
								keyboardType="numeric"
								placeholder="Yeni Şifre"
								placeholderTextColor={Colors.LoginPagePlaceholderTextColor}
								underlineColorAndroid={Colors.LoginPageTextInputBackgroundColor}
								style={styles.textInput}
							/>
						</View>
						<View style={[styles.information, { marginBottom: widthPercentageToDP('2%') }]}>
							<Image source={require('../../assets/inputSifre.png')} style={styles.textInputImage} />
							<TextInput
								keyboardType="numeric"
								placeholder="Yeni Şifre Tekrar"
								placeholderTextColor={Colors.LoginPagePlaceholderTextColor}
								underlineColorAndroid={Colors.LoginPageTextInputBackgroundColor}
								style={styles.textInput}
							/>
						</View>

						<View style={styles.buttonContainer}>
							<Button
								raised
								style={styles.resetCodeButton}
								dark={true}
								onPress={() => {
									this.props.navigation.navigate('login');
								}}
							>
								KAYDET
							</Button>
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
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
	information: {
		flexDirection: 'row',
		paddingHorizontal: widthPercentageToDP('4%'),
		paddingVertical: widthPercentageToDP('1%'),
		alignItems: 'center',
		marginHorizontal: widthPercentageToDP('4%'),
		backgroundColor: Colors.LoginPageTextInputBackgroundColor
	},
	textInputImage: {
		resizeMode: 'contain',
		width: widthPercentageToDP('3%')
	},
	textInput: {
		flex: 1,
		paddingLeft: widthPercentageToDP('3%'),
		height: heightPercentageToDP('6%'),
		fontWeight: 'bold'
	},
	buttonContainer: {
		margin: widthPercentageToDP('3%')
	},
	resetCodeButton: {
		paddingVertical: widthPercentageToDP('2%'),
		backgroundColor: Colors.LoginButtonColor
	},

	goToLoginButton: {
		opacity: 0.7,
		backgroundColor: Colors.ForgotPasswordButton,
		marginHorizontal: widthPercentageToDP('20%')
	}
});
const mapStateToProps = state => {
	const { token, isTokenLoading, tokenError } = state.token;
	return { token, isTokenLoading, tokenError };
};

export default connect(mapStateToProps, { fetchToken })(ForgotPasswordPage);
