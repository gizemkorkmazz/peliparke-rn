import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import { FontSizeDict } from './../../helpers/Constans';
import ProductCodeInfoComponent from '../common/ProductCodeInfoComponent';
class QRCodeUnsuccessful extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.qrPassUnsuccessful}>
					<Image source={require('../../../assets/sorry.png')} style={styles.qrPassUnsuccessfulImage} />
					<Text style={[styles.qrPassContainerText]}>Son 60 saniyede hiçbir ürün kodu </Text>
					<Text style={[styles.qrPassContainerText]}>okuyamadık</Text>
				</View>

				<TouchableOpacity onPress={() => {}}>
					<ProductCodeInfoComponent
						containerText="TEKRAR DENE"
						containerImage={require('../../../assets/retry.png')}
						style={{
							marginTop: widthPercentageToDP('3%'),
							backgroundColor: Colors.RegisterButtonColor
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}}>
					<ProductCodeInfoComponent
						containerText="ÜRÜN KODU NASIL OKUTURUM ?"
						containerImage={require('../../../assets/question.png')}
						style={{
							marginTop: widthPercentageToDP('3%'),
							backgroundColor: Colors.LoginButtonColor
						}}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	qrPassUnsuccessful: {
		backgroundColor: Colors.HomePageQRContainerBackgroundColor,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 0.75
	},
	qrPassUnsuccessfulImage: {
		resizeMode: 'contain',
		width: widthPercentageToDP('14%'),
		height: heightPercentageToDP('10%')
	},
	qrPassContainerText: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font17,
		fontWeight: 'bold'
	}
});
export default QRCodeUnsuccessful;
