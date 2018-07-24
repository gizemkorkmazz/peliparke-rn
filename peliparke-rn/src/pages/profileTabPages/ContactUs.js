import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, widthPercentageToDP, heightPercentageToDP } from '../../helpers';
import { FontSizeDict } from './../../helpers/Constans';
import { Dialog, Divider } from '../../../node_modules/react-native-paper';
import FullWidthButton from './../../components/common/FullWidthButton';
class ContactUs extends Component {
	state = {
		isSelectTopicTitleVisible: false,
		topic: 'Konu Başlığı Seçin'
	};
	render() {
		return (
			<View style={{ paddingTop: widthPercentageToDP('2%') }}>
				<TouchableOpacity
					onPress={() => {
						this.setState({ isSelectTopicTitleVisible: true });
					}}
				>
					<View style={styles.selectTopicContainer}>
						<Text style={styles.TopicText}>{this.state.topic}</Text>
						<MaterialCommunityIcons name="menu-down" size={widthPercentageToDP('4%')} />
					</View>
				</TouchableOpacity>
				<View style={{ height: heightPercentageToDP('10%') }}>
					<ScrollView>
						<TextInput
							placeholder="Mesajınız"
							style={styles.messageInput}
							underlineColorAndroid="transparent"
							multiline={true}
							maxLength={300}
						/>
					</ScrollView>
				</View>

				<FullWidthButton buttonText="Gönder" onClick={() => {}} />
				<Dialog
					visible={this.state.isSelectTopicTitleVisible}
					onDismiss={() => {
						this.setState({ isSelectTopicTitleVisible: false });
					}}
				>
					<View style={styles.dialogContainer}>
						<Text style={styles.dialogTextsHead}>Konu Başlığı Seçin</Text>
						<Divider style={{ marginBottom: widthPercentageToDP('2%') }} />

						<TouchableOpacity
							onPress={() => {
								this.setState({ topic: 'Genel', isSelectTopicTitleVisible: false });
							}}
						>
							<Text style={styles.dialogTexts}>Genel</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.setState({ topic: 'Şikayet', isSelectTopicTitleVisible: false });
							}}
						>
							<Text style={styles.dialogTexts}>Şikayet</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.setState({ topic: 'İstek', isSelectTopicTitleVisible: false });
							}}
						>
							<Text style={styles.dialogTexts}>İstek</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.setState({ topic: 'Öneri', isSelectTopicTitleVisible: false });
							}}
						>
							<Text style={styles.dialogTexts}>Öneri</Text>
						</TouchableOpacity>
					</View>
				</Dialog>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	selectTopicContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'white',
		padding: widthPercentageToDP('3%'),
		margin: widthPercentageToDP('3%')
	},
	TopicText: {
		color: '#C8C8C8',
		fontSize: FontSizeDict.font14
	},
	messageInput: {
		backgroundColor: 'white',
		marginHorizontal: widthPercentageToDP('3%'),
		padding: widthPercentageToDP('3%')
	},
	dialogContainer: {
		padding: widthPercentageToDP('4%'),
		backgroundColor: Colors.AppBackgroundColor
	},
	dialogTexts: {
		fontSize: FontSizeDict.font14,
		marginBottom: widthPercentageToDP('2%'),
		color: 'black'
	},
	dialogTextsHead: {
		fontSize: FontSizeDict.font16,
		fontStyle: 'italic',
		color: Colors.ForgotPasswordButton
	}
});
export default ContactUs;
