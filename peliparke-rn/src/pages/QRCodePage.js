import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';

class QRCodePage extends Component {
	render() {
		return (
			<Page title="Kare Kod Giriş">
				<Text>Kare kod Page</Text>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(QRCodePage);
