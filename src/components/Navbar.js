'use strict';

import React from 'react';

import '../styles/navbarStyles.css';

export default function(props) {
	function handleClick(location) {
		$('body').animate({scrollTop: location}, 800);
	}

	return(
		<ul>
			<li onClick={() => handleClick(0)}>&lt;jj /&gt;</li>
			<li className="hide" onClick={() => handleClick($('.about-main').position().top)}>about me</li>
			<div className="hide border-right"></div>
			<li className="hide" onClick={() => handleClick($('.process-main').position().top)}>the process</li>
			<div className="hide border-right"></div>
			<li className="hide" onClick={() => handleClick($('.tools-main').position().top)}>my tools</li>
			<div className="hide border-right"></div>
			<li className="hide" onClick={() => handleClick($('.contact-main').position().top)}>contact</li>
		</ul>
	);
};

