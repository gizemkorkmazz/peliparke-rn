import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';
import { widthPercentageToDP, heightPercentageToDP, Colors } from '../helpers';
import Swiper from 'react-native-swiper';
import { FontSizeDict } from './../helpers/Constans';
import GiftCategory from '../components/homePage/GiftCategory';
const bunnerImages = [
	{
		source: require('../../assets/homeSlider1.png')
	},
	{
		source: require('../../assets/homeSlider1.png')
	},
	{
		source: require('../../assets/homeSlider1.png')
	},
	{
		source: require('../../assets/homeSlider1.png')
	}
];
const giftCategory = [
	{
		source: require('../../assets/hediyeKatalogugorsel1.jpg'),
		title: 'Dell Laptop'
	},
	{
		source: require('../../assets/hediyekatalogugorsel2.jpeg'),
		title: 'Iphone 6'
	},
	{
		source: require('../../assets/hediyekatalogugorsel3.jpg'),
		title: 'Travel'
	}
];

class HomePage extends Component {
	renderBunnerImage() {
		return bunnerImages.map((item, index) => {
			return <Image source={item.source} style={styles.bunner} key={index} />;
		});
	}
	renderGiftCategory() {
		return giftCategory.map((item, index) => {
			return <GiftCategory giftImageSource={item.source} giftCategoryTitle={item.title} key={index} />;
		});
	}
	render() {
		return (
			<Page logo={require('../../assets/logo.png')} pageStyle={{ padding: 0 }}>
				<View style={{ backgroundColor: Colors.AppBackgroundColor, flex: 1 }}>
					<View style={styles.container}>
						<Swiper
							dotStyle={{ backgroundColor: 'white' }}
							activeDotStyle={{ backgroundColor: Colors.HomePageQRContainerBackgroundColor }}
						>
							{this.renderBunnerImage()}
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
									{this.renderGiftCategory()}
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
	}
});
const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(HomePage);
