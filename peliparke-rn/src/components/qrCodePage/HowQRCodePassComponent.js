import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Page from '../common/Page';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import Swiper from 'react-native-swiper';
import { FontSizeDict } from './../../helpers/Constans';
import ProductCodeInfoComponent from './../common/ProductCodeInfoComponent';
class HowQRCodePassComponent extends Component {
	render() {
		const { onClick } = this.props;
		return (
			<View style={styles.container}>
				<ProductCodeInfoComponent
					containerText="ÜRÜN KODU NASIL OKUTURUM ?"
					containerImage={require('../../../assets/question.png')}
				/>
				<View style={styles.swiperContainer}>
					<Swiper
						dotStyle={{ backgroundColor: 'white' }}
						activeDotStyle={{ backgroundColor: Colors.LoginButtonColor }}
					>
						<Image source={require('../../../assets/qrDummy.png')} style={styles.bunner} />
						<Image source={require('../../../assets/qrDummy.png')} style={styles.bunner} />
						<Image source={require('../../../assets/qrDummy.png')} style={styles.bunner} />
					</Swiper>
				</View>
				<TouchableOpacity
					onPress={() => {
						onClick();
					}}
				>
					<ProductCodeInfoComponent
						style={{ backgroundColor: Colors.HomePageQRContainerBackgroundColor }}
						containerText="ÜRÜN KODU OKUT"
						containerImage={require('../../../assets/yeniBarkot.png')}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		padding: widthPercentageToDP('2%')
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
export default HowQRCodePassComponent;
