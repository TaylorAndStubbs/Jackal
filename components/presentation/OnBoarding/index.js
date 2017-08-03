/**
 * Entry point.
 */
import React, { Component } from 'react';
import { View, Text, Picker, ScrollView, TextInput, Button } from 'react-native';
import * as Firebase from 'firebase';
import Style from './style.js';

export default class OnBoarding extends Component {
	constructor( props ) {
		super(props);

		this.state = {
			genderPreference: "NA",
			gender: "NA",
			name: "",
			email: "",
			password: ""
		}
	}

	render() {
		return (
			<ScrollView>
				<Text>
					Do you want to meet a boy or a girl?
				</Text>
				<Picker onValueChange={( value ) => {this.handleFormInput("genderPreference", value)}}
						selectedValue={this.state.genderPreference}>
					<Picker.Item label="NA" value="NA"/>
					<Picker.Item label="Boy" value="male"/>
					<Picker.Item label="Girl" value="female"/>
				</Picker>
				<Text>
					What's your name?
				</Text>
				<TextInput onChangeText={( value ) => {this.handleFormInput("name", value)}}
						   value={this.state.name}/>
				<Text>
					Are you a boy or a girl?
				</Text>
				<Picker onValueChange={( value ) => {this.handleFormInput("gender", value)}}
						selectedValue={this.state.gender}>
					<Picker.Item label="NA" value="NA"/>
					<Picker.Item label="Boy" value="male"/>
					<Picker.Item label="Girl" value="female"/>
				</Picker>
				<Text>
					Let's get your email.
				</Text>
				<TextInput onChangeText={( value ) => {this.handleFormInput("email", value)}}
						   value={this.state.email}/>
				<Text>
					And your password.
				</Text>
				<TextInput secureTextEntry={true} onChangeText={( value ) => {this.handleFormInput("password", value)}}
						   value={this.state.password}/>
				<Button title="Create Account" onPress={() => {this.createAccount()}}/>
			</ScrollView>
		)
	}

	handleFormInput( pickerName, value ) {
		const newState = this.state;
		newState[pickerName] = value;
		this.setState(newState);
	}

	createAccount() {
		Firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
			//TODO handle create account
		}).catch(( error ) => {
			//TODO handle create account error
			console.log(error.message);
		});
	}
}