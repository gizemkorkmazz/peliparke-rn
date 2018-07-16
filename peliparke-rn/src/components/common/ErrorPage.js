import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP, FontSizeDict } from '../../helpers';
import { MaterialIcons } from '@expo/vector-icons';

class ErrorPage extends Component {
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
				<MaterialIcons name="sentiment-dissatisfied" size={widthPercentageToDP('10%')} color="white" />
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
export { ErrorPage };
