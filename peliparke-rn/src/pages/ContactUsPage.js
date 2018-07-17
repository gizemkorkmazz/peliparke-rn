import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';

class ContactUsPage extends Component {
	render() {
		return (
			<Page title="Bize Ulaşın">
				<Text>Bize Ulaşın</Text>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(ContactUsPage);
