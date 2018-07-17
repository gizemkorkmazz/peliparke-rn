import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Page from '../components/common/Page';

class VideosPage extends Component {
	render() {
		return (
			<Page title="Videolar">
				<Text>Videolar Page</Text>
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(VideosPage);
