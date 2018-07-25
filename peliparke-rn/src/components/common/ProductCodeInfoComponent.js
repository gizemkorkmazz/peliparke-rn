import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import { FontSizeDict } from './../../helpers/Constans';
import { PropTypes } from 'prop-types';
class ProductCodeInfoComponent extends Component {
	render() {
		const { style, containerText, containerImage } = this.props;
		return (
			<View style={[styles.qrPassContainer, style]}>
				<Text style={styles.qrPassContainerText}>{containerText}</Text>
				<Image source={containerImage} style={styles.qrPassContainerImage} />
			</View>
		);
	}
}
ProductCodeInfoComponent.propTypes = {
	style: PropTypes.object,
	containerText: PropTypes.string,
	containerImage: PropTypes.number
};
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
	}
});
export default ProductCodeInfoComponent;
