'use strict';

import React from 'react';

import '../styles/contactSectionStyles.css';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			body: ''
		}
	}

	handleChange(name, event) {
		let change = {};
		change[name] = event.target.value;
		this.setState(change);
	}

	render() {
		return (
			<div className="contact-main">
				<h3>interested? send me a message</h3>
				<div className="contact-underline"></div>
				<form method="post" action="https://formspree.io/jadenj133@gmail.com">
					<input type="text" placeholder="name" name="name" onChange={this.handleChange.bind(this, 'name')} className="contact-main-input" required />
					<input type="email" placeholder="your email" name="email" onChange={this.handleChange.bind(this, 'email')} className="contact-main-input" required />
					<textarea type="text" placeholder="message" name="message" onChange={this.handleChange.bind(this, 'body')} className="contact-main-input" required />
					<input type="submit" value="send" className="send-btn" />
				</form>
			</div>
		);
	}
}
