import React, { Component } from 'react';
import { createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
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
const DrawerPage = createDrawerNavigator(
	{
		home: {
			screen: HomePage,
			navigationOptions: {
				drawerLabel: 'Ana Sayfa',
				drawerIcon: require('../../assets/menuHome.png')
			}
		},
		profile: {
			screen: ProfilePage,
			navigationOptions: {
				drawerLabel: 'Profilim',
				drawerIcon: require('../../assets/menuProfile.png')
			}
		},
		qrCode: {
			screen: QRCodePage,
			navigationOptions: {
				drawerLabel: 'Kare Kod Giriş',
				drawerIcon: require('../../assets/menuQr.png')
			}
		},
		giftCatalog: {
			screen: GiftCatalogPage,
			navigationOptions: {
				drawerLabel: 'Hediye Kataloğu',
				drawerIcon: require('../../assets/menuHediye.png')
			}
		},
		videos: {
			screen: VideosPage,
			navigationOptions: {
				drawerLabel: 'Videolar',
				drawerIcon: require('../../assets/menuVideolar.png')
			}
		},
		newsFromUs: {
			screen: NewsFromUsPage,
			navigationOptions: {
				drawerLabel: 'Bizden Haberler',
				drawerIcon: require('../../assets/menuBizdenHaber.png')
			}
		},
		social: {
			screen: SocialPage,
			navigationOptions: {
				drawerLabel: 'Sosyal Mecralar',
				drawerIcon: require('../../assets/menuSosyalMecaralar.png')
			}
		},
		contactUs: {
			screen: ContactUsPage,
			navigationOptions: {
				drawerLabel: 'Bize Ulaşın',
				drawerIcon: require('../../assets/menuBizeUlasin.png')
			}
		}
	},
	{
		initialRouteName: 'home',
		contentComponent: SideMenu,
		contentOptions: {}
	}
);

const MainPage = createSwitchNavigator(
	{
		splash: {
			screen: SplashPage
		},
		app: {
			screen: DrawerPage
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
