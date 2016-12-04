'use strict';

import React from 'react';

import '../styles/navbarStyles.css';

export default function(props) {
	function handleClick(location) {
		$('body').animate({scrollTop: location}, 800);
	}

	return(
		<ul>
			<li>&lt;jj /&gt;</li>
			<li onClick={() => handleClick($('.about-main').position().top)}>about me</li>
			<div className="border-right"></div>
			<li>the process</li>
			<div className="border-right"></div>
			<li>contact</li>
		</ul>
	);
};


