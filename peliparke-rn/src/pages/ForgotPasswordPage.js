import React, { Component } from 'react';
import { View, ImageBackground, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchToken } from 'apollo-rn-redux-helper/src/actions';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../helpers';
import TextInputComponent from './../components/common/TextInputComponent';
import FullWidthButton from './../components/common/FullWidthButton';
import RaisedButton from './../components/login/RaisedButton';
const { width } = Dimensions.get('window');
class ForgotPasswordPage extends Component {
	render() {
		return (
			<ImageBackground source={require('../../assets/loginBG.jpg')} style={styles.loginBackgroundImage}>
				<View style={styles.logoContainer}>
					<Image source={require('../../assets/logo.png')} style={styles.logo} />
				</View>
				<ScrollView horizontal={true} pagindEnabled={true} ref="myScrollView" scrollEnabled={false}>
					<View style={{ width: width }}>
						<TextInputComponent
							textInputImageSource={require('../../assets/inputCeptel.png')}
							textInputPlaceholder="Cep Tel"
							textInputBackgroundColor={Colors.LoginPageTextInputBackgroundColor}
						/>
						<FullWidthButton
							buttonText="ŞİFRE SIFIRLAMA KODU GÖNDER"
							onClick={() => {
								this.refs.myScrollView.scrollTo({ x: width, y: 0, animated: true });
							}}
						/>
						<RaisedButton
							buttonText="LOGİN SAYFASINA DÖN"
							onClick={() => {
								this.props.navigation.navigate('login');
							}}
						/>
					</View>
					<View style={{ width: width }}>
						<TextInputComponent
							textInputImageSource={require('../../assets/inputSifre.png')}
							textInputPlaceholder="Şifre Sıfırlama Kodu"
							textInputBackgroundColor={Colors.LoginPageTextInputBackgroundColor}
						/>
						<FullWidthButton
							buttonText="DEVAM ET"
							onClick={() => {
								this.refs.myScrollView.scrollTo({ x: width * 2, y: 0, animated: true });
							}}
						/>
						<RaisedButton
							buttonText="KODU TEKRAR GÖNDER"
							onClick={() => {
								this.refs.myScrollView.scrollTo({ x: 0, y: 0, animated: true });
							}}
						/>
					</View>
					<View style={{ width: width }}>
						<TextInputComponent
							textInputImageSource={require('../../assets/inputSifre.png')}
							textInputPlaceholder="Yeni Şifre"
							textInputBackgroundColor={Colors.LoginPageTextInputBackgroundColor}
						/>
						<TextInputComponent
							textInputImageSource={require('../../assets/inputSifre.png')}
							textInputPlaceholder="Yeni Şifre Tekrar"
							textInputBackgroundColor={Colors.LoginPageTextInputBackgroundColor}
						/>
						<FullWidthButton
							buttonText="KAYDET"
							onClick={() => {
								this.props.navigation.navigate('login');
							}}
						/>
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
	}
});
const mapStateToProps = state => {
	const { token, isTokenLoading, tokenError } = state.token;
	return { token, isTokenLoading, tokenError };
};

export default connect(mapStateToProps, { fetchToken })(ForgotPasswordPage);
