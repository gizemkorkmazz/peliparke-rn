import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import { Camera, Permissions } from 'expo';
import { FontSizeDict } from './../../helpers/Constans';
import ProductCodeInfoComponent from '../common/ProductCodeInfoComponent';
import BackgroundTimer from 'react-native-background-timer';
class QRCodePhotoComponent extends Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back
	};
	async componentWillMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	render() {
		const { onClick } = this.props;
		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => {
						onClick();
					}}
				>
					<ProductCodeInfoComponent
						containerText="ÜRÜN KODU NASIL OKUTURUM ?"
						containerImage={require('../../../assets/question.png')}
					/>
				</TouchableOpacity>
				<View style={styles.cameraStyle} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: widthPercentageToDP('2%')
	},
	cameraStyle: {
		flex: 0.9,
		marginTop: widthPercentageToDP('2%'),
		backgroundColor: 'black'
	}
});
export default QRCodePhotoComponent;
