import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, widthPercentageToDP } from '../../helpers';
import { Button } from '../../../node_modules/react-native-paper';
import { PropTypes } from 'prop-types';
class FullWidthButton extends Component {
	render() {
		const { onClick, buttonText } = this.props;
		return (
			<View style={styles.buttonContainer}>
				<Button
					raised
					style={styles.resetCodeButton}
					dark={true}
					onPress={() => {
						onClick();
					}}
				>
					{buttonText}
				</Button>
			</View>
		);
	}
}
FullWidthButton.propTypes = {
	onClick: PropTypes.func,
	buttonText: PropTypes.string
};
const styles = StyleSheet.create({
	buttonContainer: {
		margin: widthPercentageToDP('3%')
	},
	resetCodeButton: {
		paddingVertical: widthPercentageToDP('2%'),
		backgroundColor: Colors.LoginButtonColor
	}
});
export default FullWidthButton;