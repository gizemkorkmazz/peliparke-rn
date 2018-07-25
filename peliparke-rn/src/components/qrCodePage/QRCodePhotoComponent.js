import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Page from '../common/Page';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import Swiper from 'react-native-swiper';
import { Camera, Permissions } from 'expo';
import { FontSizeDict } from './../../helpers/Constans';
class QRCodePhotoComponent extends Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back
	};
	render() {
		return (
			<View>
				<TouchableOpacity onPress={() => {}}>
					<View style={styles.qrPassContainer}>
						<Text style={styles.qrPassContainerText}>ÜRÜN KODU NASIL OKUTURUM ?</Text>
						<Image source={require('../../../assets/question.png')} style={styles.qrPassContainerImage} />
					</View>
				</TouchableOpacity>
				<Camera ref={ref => (this.camera = ref)} style={styles.cameraStyle} type={this.state.type} />
			</View>
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
	cameraStyle: {
		width: widthPercentageToDP('94%'),
		height: heightPercentageToDP('70%'),
		marginTop: widthPercentageToDP('2%')
	}
});
export default QRCodePhotoComponent;
