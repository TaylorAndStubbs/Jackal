/**
 * Entry point.
 */
import React, { Component } from 'react';
import { View, Text, Picker, ScrollView, TextInput } from 'react-native';
import Style from './style.js';

export default class OnBoarding extends Component {
	render() {
		return (
			<ScrollView>
				<Text>
					Do you want to meet a boy or a girl?
				</Text>
				<Picker>
					<Picker.Item label="Boy" value="male"/>
					<Picker.Item label="Girl" value="female"/>
				</Picker>
				<Text>
					What's your name?
				</Text>
				<TextInput/>
				<Text>
					Are you a boy or a girl?
				</Text>
				<Picker>
					<Picker.Item label="Boy" value="male"/>
					<Picker.Item label="Girl" value="female"/>
				</Picker>
				<Text>
					Let's get your email.
				</Text>
				<TextInput/>
				<Text>
					And your password.
				</Text>
				<TextInput secureTextEntry={true}/>
			</ScrollView>
		)
	}
}