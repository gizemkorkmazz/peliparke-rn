import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Page from '../components/common/Page';
import ProfileInformations from './profileTabPages/ProfileInformations';
import Points from './profileTabPages/Points';
import Messages from './profileTabPages/Messages';
import ContactUs from './profileTabPages/ContactUs';
import { heightPercentageToDP, FontSizeDict } from '../helpers';
const ProfileTabPages = createMaterialTopTabNavigator(
	{
		profileInformations: {
			screen: ProfileInformations,
			navigationOptions: {
				title: 'Profil Bilgilerim'
			}
		},
		points: {
			screen: Points,
			navigationOptions: {
				title: 'Puanlarım'
			}
		},
		messages: {
			screen: Messages,
			navigationOptions: {
				title: 'Mesajlarım'
			}
		},
		contactUs: {
			screen: ContactUs,
			navigationOptions: {
				title: 'Bize Ulaşın'
			}
		}
	},
	{
		tabBarOptions: {
			scrollEnabled: true,
			indicatorStyle: { backgroundColor: 'white' },
			tabStyle: { height: heightPercentageToDP('7%') },
			style: { backgroundColor: 'red' },
			upperCaseLabel: false,
			activeTintColor: 'white',
			labelStyle: { fontSize: FontSizeDict.font10, fontWeight: 'bold' }
		}
	}
);

class ProfilePage extends Component {
	render() {
		return (
			<Page title="Hesabım" pageStyle={{ padding: 0 }}>
				<ProfileTabPages />
			</Page>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, null)(ProfilePage);
