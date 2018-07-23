import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, UIManager, LayoutAnimation } from 'react-native';
import { Colors, widthPercentageToDP } from '../../helpers';
import { FontSizeDict } from './../../helpers/Constans';
import { PropTypes } from 'prop-types';
import { ListAccordion, ListItem, Card, CardContent, Paragraph } from '../../../node_modules/react-native-paper';
class MessageDataRow extends Component {
	state = {
		isMessageVisible: false
	};
	constructor(props) {
		super(props);
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	showMessage() {
		if (this.state.isMessageVisible === true) {
			return (
				<Card style={{ marginHorizontal: widthPercentageToDP('3%') }}>
					<CardContent style={{ paddingHorizontal: 0, paddingTop: 0 }}>
						<View style={styles.messageCard}>
							<Text style={styles.messageCardTitle}>Peli Parke</Text>
							<Text style={styles.messageCardTitle}>23.07.2018</Text>
						</View>
						<Paragraph style={styles.paragraph}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et felis id ex condimentum
							fringilla ac ut felis. Curabitur ac ex a metus maximus posuere consectetur et nunc. Nullam
							nec sapien ut nisi tincidunt pellentesque nec ut ipsum. In pretium consectetur nisl quis
							viverra. Quisque tempor quis nunc vel aliquam.
						</Paragraph>
					</CardContent>
				</Card>
			);
		}
	}

	render() {
		const { messageTitle, messageContent, messageTime, isMessageRead } = this.props;
		if (isMessageRead === false) {
			return (
				<View>
					<TouchableOpacity
						onPress={() => {
							LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
							this.setState({ isMessageVisible: !this.state.isMessageVisible });
						}}
					>
						<View
							style={[
								styles.welcome,
								{ borderWidth: 0.7, borderColor: Colors.HomePageQRContainerBackgroundColor }
							]}
						>
							<View>
								<Text style={styles.messageTitle}>{messageTitle}</Text>
								<Text style={styles.messageContent}>{messageContent}</Text>
							</View>
							<Text style={styles.messageTime}>{messageTime}</Text>
						</View>
					</TouchableOpacity>
					<View>{this.showMessage()}</View>
				</View>
			);
		}
		return (
			<View>
				<TouchableOpacity
					onPress={() => {
						LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
						this.setState({ isMessageVisible: !this.state.isMessageVisible });
					}}
				>
					<View style={styles.welcome}>
						<View>
							<Text style={styles.messageTitle}>{messageTitle}</Text>
							<Text style={styles.messageContent}>{messageContent}</Text>
						</View>
						<View>
							<Text style={styles.messageTime}>{messageTime}</Text>
						</View>
					</View>
				</TouchableOpacity>
				<View>{this.showMessage()}</View>
			</View>
		);
	}
}
MessageDataRow.propTypes = {
	messageTitle: PropTypes.string,
	messageContent: PropTypes.string,
	messageTime: PropTypes.string
};
const styles = StyleSheet.create({
	welcome: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		marginVertical: widthPercentageToDP('1%'),
		marginHorizontal: widthPercentageToDP('3%'),
		padding: widthPercentageToDP('2%')
	},

	messageTitle: {
		fontSize: FontSizeDict.font13
	},
	messageContent: {
		color: Colors.ForgotPasswordButton,
		fontSize: FontSizeDict.font10
	},
	messageTime: {
		textAlignVertical: 'center',
		color: Colors.ForgotPasswordButton,
		fontSize: FontSizeDict.font10
	},
	paragraph: {
		color: Colors.ForgotPasswordButton,
		fontSize: FontSizeDict.font10,
		padding: widthPercentageToDP('2%')
	},
	messageCard: {
		flexDirection: 'row',
		backgroundColor: Colors.HomePageQRContainerBackgroundColor,
		justifyContent: 'space-between',
		padding: widthPercentageToDP('3%')
	},
	messageCardTitle: {
		color: Colors.BasicTextColor,
		fontSize: FontSizeDict.font12
	}
});
export default MessageDataRow;
