import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme, Paper, Toolbar, ToolbarBackAction, ToolbarAction, ToolbarContent } from 'react-native-paper';
import { FontSizeDict } from '../../helpers';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

class Page extends Component {
	onHamburgerClick = navigation => {
		navigation.openDrawer();
	};

	render() {
		const { title, pageStyle, children } = this.props;
		return (
			<Paper style={styles.paperStyle}>
				<Toolbar statusBarHeight={0}>
					<ToolbarAction icon="menu" onPress={() => this.onHamburgerClick(this.props.navigation)} />
					<ToolbarContent
						style={{ alignItems: 'center' }}
						titleStyle={styles.toolBarTitleStyle}
						title={title}
					/>
					<ToolbarAction />
				</Toolbar>
				<View style={[styles.pageStyle, pageStyle]}>{children}</View>
			</Paper>
		);
	}
}

Page.propTypes = {
	title: PropTypes.string,
	pageStyle: PropTypes.object,
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const styles = StyleSheet.create({
	paperStyle: {
		flex: 1
	},
	pageStyle: {
		flex: 1,
		padding: '3%'
	},
	toolBarTitleStyle: {
		fontSize: FontSizeDict.font16
	}
});

export default withNavigation(Page);
