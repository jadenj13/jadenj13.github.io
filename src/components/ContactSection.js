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
				<form>
					<input type="text" placeholder="name" onChange={this.handleChange.bind(this, 'name')} />
					<input type="email" placeholder="your email" onChange={this.handleChange.bind(this, 'email')} />
					<textarea type="text" placeholder="message" onChange={this.handleChange.bind(this, 'body')} />
					<button>send</button>
				</form>
			</div>
		);
	}
}
