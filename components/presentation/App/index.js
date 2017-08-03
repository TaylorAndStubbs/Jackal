/**
 * Entry point.
 */
import React, { Component } from 'react';
import * as Firebase from 'firebase';
import OnBoarding from '../OnBoarding';
import Style from './style.js';

const config = {
	apiKey: "AIzaSyCA3BkHVPg1yi1NS7FbjCCkwbGfSttCzIo",
	authDomain: "jackal-1c6f9.firebaseapp.com",
	databaseURL: "https://jackal-1c6f9.firebaseio.com",
	projectId: "jackal-1c6f9",
	storageBucket: "",
	messagingSenderId: "647555792789"
};

Firebase.initializeApp(config);

export default class App extends Component {
	render() {
		return (
			<OnBoarding/>
		)
	}
}