import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, widthPercentageToDP } from '../../helpers';
import { FontSizeDict } from './../../helpers/Constans';
import PointsDataRow from '../../components/profilePage/PointsDataRow';
const points = [
	{
		pointText: 'Şu şeyden kazandığın puandır.',
		point: '120',
		pointDate: '20.07.2018'
	},
	{
		pointText: 'Şu şeyden kazandığın puandır.',
		point: '120',
		pointDate: '20.07.2018'
	},
	{
		pointText: 'Şu şeyden kazandığın puandır.',
		point: '120',
		pointDate: '20.07.2018'
	},
	{
		pointText: 'Şu şeyden kazandığın puandır.',
		point: '120',
		pointDate: '20.07.2018'
	}
];
class Points extends Component {
	renderPoints() {
		return points.map((item, index) => {
			return (
				<PointsDataRow pointText={item.pointText} point={item.point} pointDate={item.pointDate} key={index} />
			);
		});
	}
	render() {
		return (
			<View>
				<View style={styles.pointContainer}>
					<Text style={styles.headText}>Açıklama</Text>
					<View style={styles.pointDetail}>
						<Text style={styles.headText}>Puan</Text>
						<Text style={[styles.headText, { paddingRight: widthPercentageToDP('6%') }]}>Tarih</Text>
					</View>
				</View>
				{this.renderPoints()}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.AppBackgroundColor,
		paddingVertical: widthPercentageToDP('4%')
	},

	headText: {
		fontSize: FontSizeDict.font12,
		color: Colors.ForgotPasswordButton,
		fontWeight: 'bold'
	},
	pointContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: widthPercentageToDP('4%'),
		marginVertical: widthPercentageToDP('1%'),
		backgroundColor: Colors.AppBackgroundColor,
		padding: widthPercentageToDP('2%')
	},

	pointDetail: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: widthPercentageToDP('30%')
	}
});
export default Points;
