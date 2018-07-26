import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import { FontSizeDict } from './../../helpers/Constans';
import ProductCodeInfoComponent from '../common/ProductCodeInfoComponent';
import { PropTypes } from 'prop-types';
class QRCodeSuccessful extends Component {
	render() {
		const { newQrCodeClick, goToHomePageClick } = this.props;
		return (
			<View style={{ flex: 1, padding: widthPercentageToDP('2%') }}>
				<View style={styles.qrSuccessfulContainer}>
					<Image source={require('../../../assets/success.png')} style={styles.qrPassSuccessfulImage} />
					<Text style={styles.qrSuccessfulContainerText}>ÜRÜN KODU BAŞARIYLA</Text>
					<Text style={styles.qrSuccessfulContainerText}>KAYDEDİLMİŞTİR</Text>
					<View style={styles.earnedScoreContainer}>
						<Text style={styles.earnedScoreText}>KAZANILAN PUAN</Text>
					</View>
					<Text style={styles.qrSuccessfulContainerText}>150</Text>
				</View>

				<TouchableOpacity
					onPress={() => {
						newQrCodeClick();
					}}
				>
					<ProductCodeInfoComponent
						containerText="YENİ ÜRÜN KODUNU OKUT"
						containerImage={require('../../../assets/yeniBarkot.png')}
						style={{
							backgroundColor: Colors.HomePageQRContainerBackgroundColor,
							marginTop: widthPercentageToDP('3%')
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						goToHomePageClick();
					}}
				>
					<View
						style={[
							styles.qrPassContainer,
							{ backgroundColor: Colors.RegisterButtonColor, justifyContent: 'center' }
						]}
					>
						<Text style={[styles.qrSuccessfulContainerText, { fontSize: FontSizeDict.font14 }]}>
							ANA SAYFAYA DÖN
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
QRCodeSuccessful.propTypes = {
	newQrCodeClick: PropTypes.func,
	goToHomePageClick: PropTypes.func
};
const styles = StyleSheet.create({
	qrSuccessfulContainer: {
		backgroundColor: Colors.LoginButtonColor,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 0.75
	},
	qrPassSuccessfulImage: {
		resizeMode: 'contain',
		width: widthPercentageToDP('10%'),
		height: heightPercentageToDP('8%')
	},
	earnedScoreContainer: {
		backgroundColor: 'white',
		width: widthPercentageToDP('35%'),
		marginTop: widthPercentageToDP('5%'),
		borderRadius: 2
	},
	earnedScoreText: {
		color: Colors.LoginButtonColor,
		fontWeight: 'bold',
		alignSelf: 'center',
		fontSize: FontSizeDict.font12
	},
	qrPassContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: widthPercentageToDP('3%'),
		backgroundColor: Colors.HomePageQRContainerBackgroundColor,
		marginTop: widthPercentageToDP('3%')
	},

	qrSuccessfulContainerText: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font17
	}
});
export default QRCodeSuccessful;
