import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP, Colors } from '../../helpers';
import { FontSizeDict } from '../../helpers/Constans';
class GiftCategory extends Component {
	render() {
		const { giftCategoryTitle, giftImageSource } = this.props;
		return (
			<TouchableOpacity>
				<ImageBackground source={giftImageSource} style={styles.giftCatalogImage}>
					<View style={styles.giftsCategoriesContainer}>
						<Text style={styles.giftCategoriesTitle}>{giftCategoryTitle}</Text>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	giftCatalogImage: {
		width: widthPercentageToDP('37%'),
		height: heightPercentageToDP('16%'),
		borderWidth: 0.5,
		borderColor: '#999999',
		marginLeft: widthPercentageToDP('3%')
	},
	giftsCategoriesContainer: {
		backgroundColor: 'white',
		opacity: 0.8,
		marginTop: widthPercentageToDP('18%'),
		marginHorizontal: widthPercentageToDP('2%'),
		paddingVertical: widthPercentageToDP('1%')
	},
	giftCategoriesTitle: {
		color: Colors.HomePageQRContainerBackgroundColor,
		fontWeight: 'bold',
		textAlignVertical: 'center',
		alignSelf: 'center',
		fontSize: FontSizeDict.font13
	}
});
export default GiftCategory;
