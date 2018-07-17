import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';

class GiftCatalogPage extends Component {
	render() {
		return (
			<Page title="Hediye Katalog Giriş">
				<Text>Hediye Katalog Page</Text>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(GiftCatalogPage);
