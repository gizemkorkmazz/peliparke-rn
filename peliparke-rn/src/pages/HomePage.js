import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';
import { widthPercentageToDP, heightPercentageToDP, Colors } from '../helpers';
import Swiper from 'react-native-swiper';
import { FontSizeDict } from './../helpers/Constans';
import GiftCategory from '../components/homePage/GiftCategory';

class HomePage extends Component {
	render() {
		return (
			<Page logo={require('../../assets/logo.png')} pageStyle={{ padding: 0 }}>
				<View style={{ backgroundColor: Colors.AppBackgroundColor, flex: 1 }}>
					<View style={styles.container}>
						<Swiper
							dotStyle={{ backgroundColor: 'white' }}
							activeDotStyle={{ backgroundColor: Colors.HomePageQRContainerBackgroundColor }}
						>
							<Image source={require('../../assets/homeSlider1.png')} style={styles.bunner} />
							<Image source={require('../../assets/homeSlider1.png')} style={styles.bunner} />
							<Image source={require('../../assets/homeSlider1.png')} style={styles.bunner} />
							<Image source={require('../../assets/homeSlider1.png')} style={styles.bunner} />
						</Swiper>
					</View>
					<View style={{ flex: 1 }}>
						<TouchableOpacity>
							<View style={styles.qrCodeContainer}>
								<Image source={require('../../assets/homeQRokut.png')} style={styles.qrPassOutImage} />
								<View style={{ paddingRight: widthPercentageToDP('25%') }}>
									<Text style={styles.qrCodeTitle}>KARE KOD OKUT</Text>
									<Text style={styles.qrCodeSubTitle}>
										Satın aldığın ürünlerin üzerindeki karekodları okut ve puanları kazan !
									</Text>
									<Image
										source={require('../../assets/homeQRarrow.png')}
										style={styles.qrArrowImage}
									/>
								</View>
							</View>
						</TouchableOpacity>

						<View style={styles.giftCatalogContainer}>
							<Text style={styles.giftCatalogTitle}>HEDİYE KATALOĞU</Text>
							<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
								<View
									style={{
										flexDirection: 'row'
									}}
								>
									<GiftCategory
										giftImageSource={require('../../assets/hediyeKatalogugorsel1.jpg')}
										giftCategoryTitle="Dell Laptop"
									/>
									<GiftCategory
										giftImageSource={require('../../assets/hediyekatalogugorsel2.jpeg')}
										giftCategoryTitle="Iphone 6"
									/>
									<GiftCategory
										giftImageSource={require('../../assets/hediyekatalogugorsel3.jpg')}
										giftCategoryTitle="Travel"
									/>
								</View>
							</ScrollView>
						</View>
					</View>
				</View>
			</Page>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 0.94
	},
	bunner: {
		flex: 1,
		resizeMode: 'contain',
		width: widthPercentageToDP('100%'),
		height: null
	},
	qrCodeContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Colors.HomePageQRContainerBackgroundColor,
		margin: widthPercentageToDP('3%')
	},
	qrPassOutImage: {
		resizeMode: 'contain',
		width: widthPercentageToDP('13%'),
		marginHorizontal: widthPercentageToDP('3%')
	},
	qrCodeTitle: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font16,
		fontWeight: 'bold'
	},
	qrCodeSubTitle: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font10,
		fontWeight: 'bold'
	},
	qrArrowImage: {
		resizeMode: 'contain',
		width: widthPercentageToDP('4%')
	},
	giftCatalogContainer: {
		backgroundColor: 'white',
		flex: 1,
		paddingVertical: widthPercentageToDP('3%'),
		marginBottom: widthPercentageToDP('4%'),
		marginHorizontal: widthPercentageToDP('3%')
	},
	giftCatalogTitle: {
		fontSize: FontSizeDict.font15,
		color: '#999999',
		fontWeight: 'bold',
		paddingLeft: widthPercentageToDP('3%'),
		marginBottom: widthPercentageToDP('4%')
	},
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
const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(HomePage);
