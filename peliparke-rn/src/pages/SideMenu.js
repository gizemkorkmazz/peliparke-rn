import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableRipple, Divider } from 'react-native-paper';
import { FontSizeDict } from './../helpers/Constans';
import { DrawerItems } from 'react-navigation';

const DrawerItem = ({ title }) => {
	return (
		<View>
			<TouchableRipple style={styles.drawerItemStyle} rippleColor="#f0f" onPress={() => {}}>
				<Text style={styles.drawerItemTitleStyle}>{title}</Text>
			</TouchableRipple>
			<Divider />
		</View>
	);
};

class SideMenu extends Component {
	state = { active: this.props.activeItemKey };

	render() {
		const { active } = this.state;
		const { items, activeItemKey, descriptors } = this.props;
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<DrawerItems {...this.props} />
			</ScrollView>

			/*if custom drawer design required*/
			// <View style={styles.containerStyle}>
			// 	<View style={styles.imageStyle}>
			// 		<Text>Burada resim olacak</Text>
			// 	</View>
			// 	<View style={styles.drawerItemsContainerStyle}>
			// 		<ScrollView showsVerticalScrollIndicator={false}>

			// 			{Object.keys(descriptors).map((item, index) => {
			// 				return <DrawerItem key={index} title={descriptors[item].options.drawerLabel || ''} />;
			// 			})}
			// 		</ScrollView>
			// 	</View>
			// </View>
		);
	}
}

// SideMenu.propTypes = {
// 	drawerItems: PropTypes.array
// };

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1
	},
	imageStyle: {
		flex: 1
	},
	drawerItemsContainerStyle: {
		flex: 2,
		padding: '2%'
	},
	drawerItemStyle: {
		paddingVertical: '4%',
		paddingHorizontal: '4%'
	},
	drawerItemTitleStyle: {
		fontSize: FontSizeDict.font14
	}
});
export default SideMenu;
