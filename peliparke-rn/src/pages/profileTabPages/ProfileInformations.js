import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import TextInputComponent from './../../components/common/TextInputComponent';
import FullWidthButton from './../../components/common/FullWidthButton';
const textInput = [
	{
		textInputImageSource: require('../../../assets/profil.png'),
		textInputPlaceholder: 'Ad Soyad'
	},
	{
		textInputImageSource: require('../../../assets/inputCep.png'),
		textInputPlaceholder: 'Cep Telefonu'
	},
	{
		textInputImageSource: require('../../../assets/inputMail.png'),
		textInputPlaceholder: 'Eposta Adresi'
	},
	{
		textInputImageSource: require('../../../assets/inputDogumTarih.png'),
		textInputPlaceholder: 'Doğum Tarihi'
	},
	{
		textInputImageSource: require('../../../assets/inputCinsiyet.png'),
		textInputPlaceholder: 'Cinsiyet'
	}
];

class ProfileInformations extends Component {
	renderTextInput() {
		return textInput.map((item, index) => {
			return (
				<TextInputComponent
					textInputImageSource={item.textInputImageSource}
					textInputPlaceholder={item.textInputPlaceholder}
					key={index}
					textInputImageStyle={{ width: widthPercentageToDP('4%'), height: heightPercentageToDP('3%') }}
				/>
			);
		});
	}
	render() {
		return (
			<View>
				{this.renderTextInput()}
				<FullWidthButton buttonText="BİLGİLERİ GÜNCELLE" onClick={() => {}} />
			</View>
		);
	}
}

export default ProfileInformations;
