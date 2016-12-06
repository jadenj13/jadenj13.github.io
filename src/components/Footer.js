'use strict';

import React from 'react';

import '../styles/footerStyles.css';

export default function(props) {
	return (
		<div className="footer-main">
			<div className="icon-container">
				<a href="http://www.github.com/jadenj13"><div className="github-icon"></div></a>
				<a href="https://ca.linkedin.com/in/jaden-johnson-706489123"><div className="linkedin-icon"></div></a>
			</div>
			<p>Copyright &copy; 2016 by Jaden Johnson. All rights reserved.</p>
		</div>
	)
}