import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../helpers';
import { FontSizeDict } from './../helpers/Constans';
import Swiper from 'react-native-swiper';
import { Camera, Permissions } from 'expo';
import QRCodePhotoComponent from '../components/qrCodePage/QRCodePhotoComponent';
import HowQRCodePassComponent from '../components/qrCodePage/HowQRCodePassComponent';
import QRCodeSuccessful from '../components/qrCodePage/QRCodeSuccessful';
import QRCodeUnsuccessful from './../components/qrCodePage/QRCodeUnsuccesful';
class QRCodePage extends Component {
	render() {
		return (
			<Page title="Ürün Kodu Okut">
				<QRCodeSuccessful />
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(QRCodePage);
