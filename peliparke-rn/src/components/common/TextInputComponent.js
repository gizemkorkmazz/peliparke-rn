import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TextInput } from 'react-native';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import { PropTypes } from 'prop-types';
class TextInputComponent extends Component {
	render() {
		const {
			textInputImageSource,
			textInputPlaceholder,
			textInputBackgroundColor,
			textInputImageStyle
		} = this.props;
		return (
			<View style={[styles.loginInformation, { backgroundColor: textInputBackgroundColor || 'white' }]}>
				<Image source={textInputImageSource} style={[styles.textInputImageStyle, textInputImageStyle]} />
				<TextInput
					keyboardType="numeric"
					placeholder={textInputPlaceholder}
					placeholderTextColor={Colors.LoginPagePlaceholderTextColor}
					underlineColorAndroid="transparent"
					style={styles.textInput}
				/>
			</View>
		);
	}
}
TextInputComponent.propTypes = {
	textInputImageSource: PropTypes.number,
	textInputPlaceholder: PropTypes.string,
	textInputBackgroundColor: PropTypes.string,
	textInputImageStyle: PropTypes.object
};
const styles = StyleSheet.create({
	loginInformation: {
		flexDirection: 'row',
		paddingHorizontal: widthPercentageToDP('4%'),
		paddingVertical: widthPercentageToDP('1%'),
		marginBottom: widthPercentageToDP('3%'),
		alignItems: 'center',
		marginHorizontal: widthPercentageToDP('4%')
		// backgroundColor: Colors.LoginPageTextInputBackgroundColor || 'white'
	},
	textInputImageStyle: {
		resizeMode: 'contain',
		width: '5%'
	},
	textInput: {
		flex: 1,
		paddingLeft: widthPercentageToDP('3%'),
		height: heightPercentageToDP('6%')
	}
});
export default TextInputComponent;
