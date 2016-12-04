'use strict';

import React from 'react';

import '../styles/navbarStyles.css';

export default function(props) {
	return(
		<ul>
			<li>&lt;jj /&gt;</li>
			<li>about me</li>
			<div className="border-right"></div>
			<li>the process</li>
			<div className="border-right"></div>
			<li>contact</li>
		</ul>
	);
};