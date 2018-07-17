import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableRipple, Divider } from 'react-native-paper';
import { FontSizeDict } from './../helpers/Constans';
import { DrawerItems } from 'react-navigation';
import { Colors, widthPercentageToDP } from '../helpers';

const DrawerItem = ({ title, icon }) => {
	return (
		<View>
			<TouchableOpacity style={styles.drawerItemStyle} onPress={() => {}}>
				<View style={styles.drawerItemContainer}>
					<Image source={icon} style={styles.drawerItemIcon} />
					<Text style={styles.drawerItemTitleStyle}>{title}</Text>
				</View>
			</TouchableOpacity>

			<Divider />
		</View>
	);
};

class SideMenu extends Component {
	state = { active: this.props.activeItemKey };

	render() {
		const { active } = this.state;
		const { items, activeItemKey, descriptors } = this.props;
		console.log(descriptors);
		return (
			<View style={styles.container}>
				<View style={styles.userContainer}>
					<Text style={styles.salute}>Merhaba,</Text>
					<Text style={styles.user}>Ahmet Tuncer.</Text>
				</View>
				<View style={styles.refresh}>
					<View style={{ flexDirection: 'row' }}>
						<Text style={styles.refreshText}>Güncel Puan:</Text>
						<Text style={styles.refreshText}>12.900</Text>
					</View>

					<TouchableOpacity style={styles.refreshButtonContainer}>
						<Image source={require('../../assets/blueRefresh.png')} style={styles.refreshButton} />
					</TouchableOpacity>
				</View>
				{/* <DrawerItems {...this.props} /> */}
				{Object.keys(descriptors).map((item, index) => {
					return (
						<DrawerItem
							key={index}
							title={descriptors[item].options.drawerLabel || ''}
							icon={descriptors[item].options.drawerIcon}
						/>
					);
				})}
				<View style={[styles.drawerItemContainer, { backgroundColor: '#00578A', flex: 1 }]}>
					<TouchableOpacity style={[styles.drawerItemStyle, { paddingTop: '6%' }]} onPress={() => {}}>
						<View style={{ flexDirection: 'row' }}>
							<Image
								source={require('../../assets/menuCikis.png')}
								style={[styles.drawerItemIcon, { tintColor: Colors.BasicTextColor }]}
							/>
							<Text style={styles.logOutItem}>ÇIKIŞ YAP</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

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

// const styles = StyleSheet.create({
// 	containerStyle: {
// 		flex: 1
// 	},
// 	imageStyle: {
// 		flex: 1
// 	},
// 	drawerItemsContainerStyle: {
// 		flex: 2,
// 		padding: '2%'
// 	},
// 	drawerItemStyle: {
// 		paddingVertical: '4%',
// 		paddingHorizontal: '4%'
// 	},
// 	drawerItemTitleStyle: {
// 		fontSize: FontSizeDict.font14
// 	}
// });
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.SideMenuFirstBackgroundColor
	},
	userContainer: {
		paddingVertical: '16%',
		paddingLeft: '8%'
		// marginBottom: '13%'
	},
	salute: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font20
	},
	user: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font31
	},
	refresh: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: '2%',
		height: '6.5%',
		backgroundColor: Colors.SideMenuRefreshViewBackgroundColor
	},
	refreshText: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font15,
		textAlignVertical: 'center'
	},

	refreshButton: {
		resizeMode: 'contain',
		width: 90,
		height: 50
	},
	refreshButtonContainer: {
		justifyContent: 'center'
	},
	drawerItemStyle: {
		paddingVertical: '4.8%',
		paddingHorizontal: '4%'
	},
	drawerItemTitleStyle: {
		fontSize: FontSizeDict.font16,
		color: Colors.BasicTextColor,
		paddingLeft: 10,
		textAlignVertical: 'center'
	},
	drawerItemContainer: {
		flexDirection: 'row'
	},
	drawerItemIcon: {
		resizeMode: 'contain',
		width: 20,
		height: 20
	},
	logOutItem: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font15,
		paddingLeft: 10,
		textAlignVertical: 'center'
	}
});
export default SideMenu;
