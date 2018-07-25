import React, { Component } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';
import QRCodePhotoComponent from '../components/qrCodePage/QRCodePhotoComponent';
import HowQRCodePassComponent from '../components/qrCodePage/HowQRCodePassComponent';
import QRCodeSuccessful from '../components/qrCodePage/QRCodeSuccessful';
import QRCodeUnsuccessful from './../components/qrCodePage/QRCodeUnsuccesful';
import { widthPercentageToDP } from '../helpers';
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
					</View>
					<View style={{ width: width }}>
						<HowQRCodePassComponent
							onClick={() => {
								this.refs.myScrollView.scrollTo({ x: 0, y: 0, animated: true });
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
