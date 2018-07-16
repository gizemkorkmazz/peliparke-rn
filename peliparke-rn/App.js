import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MainNavigationPage from './src/pages/MainNavigationPage';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme, Colors } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';
import myReducer from 'apollo-rn-redux-helper/src/reducers';
import thunk from 'redux-thunk';

// // DefaultTheme
// export default {
// 	dark: false,
// 	roundness: 2,
// 	colors: {
// 	  primary: indigo500,
// 	  accent: pinkA200,
// 	  background: grey50,
// 	  paper: white,
// 	  error: redA400,
// 	  text: black,
// 	  disabled: color(black)
// 		.alpha(0.26)
// 		.rgb()
// 		.string(),
// 	  placeholder: color(black)
// 		.alpha(0.38)
// 		.rgb()
// 		.string(),
// 	},
// 	fonts,
//   };

const theme = {
	...DefaultTheme,
	// dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: 'tomato',
		accent: 'yellow',
		paper: 'red'
	}
};

export default class App extends React.Component {
	componentDidMount() {
		StatusBar.setHidden(true);
	}

	render() {
		return (
			<ReduxProvider store={createStore(myReducer, {}, applyMiddleware(thunk))}>
				<PaperProvider>
					<MainNavigationPage />
				</PaperProvider>
			</ReduxProvider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
