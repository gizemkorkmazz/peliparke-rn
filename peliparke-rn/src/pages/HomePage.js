import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';
import { widthPercentageToDP, heightPercentageToDP } from '../helpers';

class HomePage extends Component {
	render() {
		return (
			<Page logo={require('../../assets/logo.png')} pageStyle={{ padding: 0 }}>
				<View style={styles.container}>
					<Image source={require('../../assets/homeSlider1.png')} style={styles.bunner} />
				</View>
			</Page>
		);
	}
}
const styles = StyleSheet.create({
	container: {},
	bunner: {
		resizeMode: 'contain',
		height: heightPercentageToDP('44.5%'),
		width: widthPercentageToDP('100%')
	}
});
const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(HomePage);
