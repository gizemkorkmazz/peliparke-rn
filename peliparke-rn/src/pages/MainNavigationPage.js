import React, { Component } from 'react';
import { createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SplashPage from './SplashPage';
import SideMenu from './SideMenu';

const DrawerPage = createDrawerNavigator(
	{
		login: {
			screen: LoginPage,
			navigationOptions: {
				drawerLabel: 'Giriş Yap'
				// drawerIcon: () => <MaterialIcons name="router" />
			}
		},

		home: {
			screen: HomePage,
			navigationOptions: {
				drawerLabel: 'Ana Sayfa'
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
