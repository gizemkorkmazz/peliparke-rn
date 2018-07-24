import React, { Component } from 'react';
import { createDrawerNavigator, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SplashPage from './SplashPage';
import SideMenu from './SideMenu';
import ProfilePage from './ProfilePage';
import QRCodePage from './QRCodePage';
import GiftCatalogPage from './GiftCatalogPage';
import VideosPage from './VideosPage';
import SocialPage from './SocialPage';
import NewsFromUsPage from './NewsFromUsPage';
import ContactUsPage from './ContactUsPage';
import ForgotPasswordPage from './ForgotPasswordPage';
const DrawerPage = createDrawerNavigator(
	{
		home: {
			screen: HomePage,
			navigationOptions: {
				drawerLabel: 'Ana Sayfa'
				// drawerIcon: require('../../assets/menuHome.png')
			}
		},
		profile: {
			screen: ProfilePage,
			navigationOptions: {
				drawerLabel: 'Profilim'
			}
		},
		qrCode: {
			screen: QRCodePage,
			navigationOptions: {
				drawerLabel: 'Kare Kod Giriş'
			}
		},
		giftCatalog: {
			screen: GiftCatalogPage,
			navigationOptions: {
				drawerLabel: 'Hediye Kataloğu'
			}
		},
		videos: {
			screen: VideosPage,
			navigationOptions: {
				drawerLabel: 'Videolar'
			}
		},
		newsFromUs: {
			screen: NewsFromUsPage,
			navigationOptions: {
				drawerLabel: 'Bizden Haberler'
			}
		},
		social: {
			screen: SocialPage,
			navigationOptions: {
				drawerLabel: 'Sosyal Mecralar'
			}
		},
		contactUs: {
			screen: ContactUsPage,
			navigationOptions: {
				drawerLabel: 'Bize Ulaşın'
			}
		}
	},
	{
		initialRouteName: 'qrCode',
		contentComponent: SideMenu,
		contentOptions: {}
	}
);
const AuthStackNavigator = createStackNavigator({
	login: {
		screen: LoginPage,
		navigationOptions: {
			header: null
		}
	},
	forgotPassword: {
		screen: ForgotPasswordPage,
		navigationOptions: {
			header: null
		}
	}
});
const MainPage = createSwitchNavigator(
	{
		splash: {
			screen: SplashPage
		},
		app: {
			screen: DrawerPage
		},
		auth: {
			screen: AuthStackNavigator
		}
	},
	{
		initialRouteName: 'app'
	}
);

class MainNavigationPage extends Component {
	render() {
		return <MainPage />;
	}
}

export default MainNavigationPage;
