import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import { Camera, Permissions } from 'expo';
import { FontSizeDict } from './../../helpers/Constans';
import ProductCodeInfoComponent from '../common/ProductCodeInfoComponent';
class QRCodePhotoComponent extends Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back
	};
	render() {
		return (
			<View style={{ flex: 1 }}>
				<TouchableOpacity onPress={() => {}}>
					<ProductCodeInfoComponent
						containerText="ÜRÜN KODU NASIL OKUTURUM ?"
						containerImage={require('../../../assets/question.png')}
					/>
				</TouchableOpacity>
				<Camera ref={ref => (this.camera = ref)} style={styles.cameraStyle} type={this.state.type} />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	cameraStyle: {
		flex: 0.9,
		marginTop: widthPercentageToDP('2%')
	}
});
export default QRCodePhotoComponent;
