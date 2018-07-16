import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP, FontSizeDict } from '../../helpers';
import { MaterialIcons } from '@expo/vector-icons';
import Page from './Page';

class LoadingPage extends Component {
	render() {
		const { infoText, onClick } = this.props;
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'black',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text
					style={{
						color: 'white',
						fontSize: FontSizeDict.font15,
						paddingVertical: widthPercentageToDP('2%'),
						marginBottom: widthPercentageToDP('3%')
					}}
				>
					{infoText}
				</Text>
			</View>
		);
	}
}
export { LoadingPage };
