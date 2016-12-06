'use strict';

import React from 'react';

import '../styles/landingSectionStyles.css';

export default class LandingSection extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount() {
		setTimeout(function() {
			$('.type').typed({
				strings: ['Hi, I am Jaden Johnson. <br> I am a full-stack Javascript developer.'],
				typeSpeed: 50,
				backDelay: 2000,
			});
		}, 500);
	}

	render() {
		return (
			<div className="main">
				<div className="type-container">
					<span className="type"></span>
				</div>
			</div>
		);
	}
}
