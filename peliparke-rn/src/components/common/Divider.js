import React from 'react';
import { View } from 'react-native';
import { Colors } from '../../helpers';

const Divider = ({ style }) => {
	return <View style={[{ height: 0.8, backgroundColor: Colors.DividerColor }, style]} />;
};

export { Divider };
