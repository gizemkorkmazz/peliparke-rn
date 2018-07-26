import React, { Component } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';
import QRCodePhotoComponent from '../components/qrCodePage/QRCodePhotoComponent';
import HowQRCodePassComponent from '../components/qrCodePage/HowQRCodePassComponent';
import QRCodeSuccessful from '../components/qrCodePage/QRCodeSuccessful';
import QRCodeUnsuccessful from './../components/qrCodePage/QRCodeUnsuccesful';
import { widthPercentageToDP, Colors } from '../helpers';
import { Button } from '../../node_modules/react-native-paper';
const { width } = Dimensions.get('window');
class QRCodePage extends Component {
	render() {
		return (
			<Page title="Ürün Kodu Okut" pageStyle={{ padding: 0 }}>
				<ScrollView
					horizontal={true}
					pagindEnabled={true}
					ref="myScrollView"
					scrollEnabled={false}
					showsHorizontalScrollIndicator={false}
				>
					<View style={{ width: width }}>
						<QRCodePhotoComponent
							onClick={() => {
								this.refs.myScrollView.scrollTo({ x: width, y: 0, animated: true });
							}}
						/>
						<View style={{ marginBottom: widthPercentageToDP('3%') }}>
							<Button
								raised
								dark={true}
								color={Colors.LoginButtonColor}
								onPress={() => {
									this.refs.myScrollView.scrollTo({ x: width * 2, y: 0, animated: true });
								}}
							>
								Başarılı
							</Button>
							<Button
								raised
								color={Colors.HomePageQRContainerBackgroundColor}
								onPress={() => {
									this.refs.myScrollView.scrollTo({ x: width * 3, y: 0, animated: true });
								}}
							>
								Başarısız
							</Button>
						</View>
					</View>
					<View style={{ width: width }}>
						<HowQRCodePassComponent
							onClick={() => {
								this.refs.myScrollView.scrollTo({ x: 0, y: 0, animated: true });
							}}
						/>
					</View>
					<View style={{ width: width }}>
						<QRCodeSuccessful
							onClick={() => {
								this.refs.myScrollView.scrollTo({ x: width * 2, y: 0, animated: true });
							}}
							newQrCodeClick={() => {
								this.refs.myScrollView.scrollTo({ x: width, y: 0, animated: true });
							}}
							goToHomePageClick={() => {
								this.props.navigation.navigate('home');
							}}
						/>
					</View>
					<View style={{ width: width }}>
						<QRCodeUnsuccessful
							onClick={() => {
								this.refs.myScrollView.scrollTo({ x: width * 3, y: 0, animated: true });
							}}
							tryAgainClick={() => {
								this.refs.myScrollView.scrollTo({ x: 0, y: 0, animated: true });
							}}
							howClick={() => {
								this.refs.myScrollView.scrollTo({ x: width, y: 0, animated: true });
							}}
						/>
					</View>
				</ScrollView>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(QRCodePage);
