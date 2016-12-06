'use strict';

import React from 'react';

import '../styles/processSectionStyles.css';

export default function(props) {
	return (
		<div className="process-main">
			<h2>the process</h2>
			<div className="underline"></div>
			<div className="process-step-container">
				<div className = "process-container">
					<div className="design-icon icon"></div>
					<h4>design</h4>
					<p>I work collabratively with you to design an awesome website. I will first get an idea of what you want in the site and then go get inspired. I will come up with a mock draft and edit it until it meets all of your needs.</p>
				</div>
				<div className = "process-container">
					<div className="build-icon icon"></div>
					<h4>build</h4>
					<p>This is where I go to work. There will be a few late nights, a little caffeine and a lot of code! I will look at the design we came up with and decide what libraries and frameworks to use, how to structure the data and get coding.</p>
				</div>
				<div className = "process-container">
					<div className="deploy-icon icon"></div>
					<h4>deploy</h4>
					<p>This is the day that we've been working towards! I will provide the project and assist however you need in the launch of your new web application. I will also be available for continued maintenance of the site.</p>
				</div>
			</div>
		</div>
	);
}
