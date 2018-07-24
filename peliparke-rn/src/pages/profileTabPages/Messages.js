import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, widthPercentageToDP } from '../../helpers';
import { FontSizeDict } from './../../helpers/Constans';
import MessageDataRow from '../../components/profilePage/MessageDataRow';
import { Button } from 'react-native-paper';
const messages = [
	{
		messageTitle: 'Peli Parke',
		messageContent: 'Yeni puan sistemi hakkında',
		messageTime: '23.07.2018',
		isMessageRead: false
	},
	{
		messageTitle: 'Peli Parke',
		messageContent: 'Yeni puan sistemi hakkında',
		messageTime: '23.07.2018',
		isMessageRead: false
	},
	{
		messageTitle: 'Peli Parke',
		messageContent: 'Yeni puan sistemi hakkında',
		messageTime: '23.07.2018',
		isMessageRead: true
	},
	{
		messageTitle: 'Peli Parke',
		messageContent: 'Yeni puan sistemi hakkında',
		messageTime: '23.07.2018',
		isMessageRead: true
	}
];
class Messages extends Component {
	renderMessages() {
		return messages.map((item, index) => {
			return (
				<MessageDataRow
					isMessageRead={item.isMessageRead}
					messageTitle={item.messageTitle}
					messageContent={item.messageContent}
					messageTime={item.messageTime}
					key={index}
				/>
			);
		});
	}
	render() {
		return (
			<View style={{ paddingTop: widthPercentageToDP('2%') }}>
				<ScrollView>{this.renderMessages()}</ScrollView>
			</View>
		);
	}
}

export default Messages;
