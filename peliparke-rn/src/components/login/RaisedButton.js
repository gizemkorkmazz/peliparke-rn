import React, { Component } from 'react';
import { Colors, widthPercentageToDP } from '../../helpers';
import { StyleSheet } from 'react-native';
import { Button } from '../../../node_modules/react-native-paper';
import { PropTypes } from 'prop-types';
class RaisedButton extends Component {
	render() {
		const { buttonText, onClick } = this.props;
		return (
			<Button
				raised
				style={styles.raisedButtonStyle}
				onPress={() => {
					onClick();
				}}
			>
				{buttonText}
			</Button>
		);
	}
}
RaisedButton.propTypes = {
	onClick: PropTypes.func,
	buttonText: PropTypes.string
};
const styles = StyleSheet.create({
	raisedButtonStyle: {
		opacity: 0.7,
		backgroundColor: Colors.ForgotPasswordButton,
		marginHorizontal: widthPercentageToDP('20%')
	}
});
export default RaisedButton;
