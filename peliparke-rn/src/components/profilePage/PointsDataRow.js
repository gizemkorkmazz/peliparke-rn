import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, widthPercentageToDP, heightPercentageToDP, FontSizeDict } from '../../helpers';
class PointsDataRow extends Component {
	render() {
		const { pointDate, point, pointText } = this.props;
		return (
			<View style={styles.pointContainer}>
				<Text style={styles.pointText}>{pointText}</Text>
				<View style={styles.pointDetail}>
					<Text style={styles.pointText}>{point}</Text>
					<Text style={[styles.pointText, { color: Colors.ForgotPasswordButton }]}>{pointDate}</Text>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	pointContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: widthPercentageToDP('4%'),
		marginVertical: widthPercentageToDP('1%'),
		backgroundColor: 'white',
		padding: widthPercentageToDP('2%')
	},
	pointText: {
		fontSize: FontSizeDict.font10
	},
	pointDetail: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: widthPercentageToDP('30%')
	}
});
export default PointsDataRow;
