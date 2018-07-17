import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';

class ProfilePage extends Component {
	render() {
		return (
			<Page title="Profilim">
				<Text>Profile Page</Text>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(ProfilePage);
