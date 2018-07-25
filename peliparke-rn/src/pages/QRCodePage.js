import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../helpers';
import { FontSizeDict } from './../helpers/Constans';
import Swiper from 'react-native-swiper';
import { Camera, Permissions } from 'expo';
import QRCodePhotoComponent from '../components/qrCodePage/QRCodePhotoComponent';

class QRCodePage extends Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back
	};
	render() {
		return (
			<Page title="Ürün Kodu Okut">
				<QRCodePhotoComponent />
				{/* <View style={styles.qrPassContainer}>
					<Text style={styles.qrPassContainerText}>ÜRÜN KODU NASIL OKUTURUM ?</Text>
					<Image source={require('../../assets/question.png')} style={styles.qrPassContainerImage} />
				</View>
				<View style={styles.swiperContainer}>
					<Swiper
						dotStyle={{ backgroundColor: 'white' }}
						activeDotStyle={{ backgroundColor: Colors.LoginButtonColor }}
					>
						<Image source={require('../../assets/qrDummy.png')} style={styles.bunner} />
						<Image source={require('../../assets/qrDummy.png')} style={styles.bunner} />
						<Image source={require('../../assets/qrDummy.png')} style={styles.bunner} />
					</Swiper>
				</View>
				<TouchableOpacity>
					<View
						style={[styles.qrPassContainer, { backgroundColor: Colors.HomePageQRContainerBackgroundColor }]}
					>
						<Text style={styles.qrPassContainerText}>ÜRÜN KODU OKUT</Text>
						<Image source={require('../../assets/yeniBarkot.png')} style={styles.qrPassContainerImage} />
					</View>
				</TouchableOpacity> */}
			</Page>
		);
	}
}
const styles = StyleSheet.create({
	qrPassContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: Colors.LoginButtonColor,
		padding: widthPercentageToDP('3%')
	},
	qrPassContainerImage: {
		resizeMode: 'contain',
		width: widthPercentageToDP('5%'),
		height: heightPercentageToDP('3%')
	},
	qrPassContainerText: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font14
	},
	bunner: {
		flex: 1,
		resizeMode: 'contain',
		width: widthPercentageToDP('100%'),
		height: null
	},
	swiperContainer: {
		height: heightPercentageToDP('50%'),
		marginVertical: widthPercentageToDP('2%')
	}
});
const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(QRCodePage);
