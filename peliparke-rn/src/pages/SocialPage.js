import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';

class SocialPage extends Component {
	render() {
		return (
			<Page title="Sosyal Mecralar">
				<Text>Sosyal Page</Text>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(SocialPage);
