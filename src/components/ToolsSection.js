'use strict';

import React from 'react';

import '../styles/toolsSectionStyles.css';

export default function(props) {
	return (
		<div className="tools-main">
			<h2>my tools</h2>
			<div className="underline"></div>
			<div className="tools-container">
				<div className="tool-container">
					<div className="html-css-icon icon"></div>
					<h4>html/css</h4>
					<p>HTML5 and CSS3 is the standard of the web and required of every web developer. It is often referred to as the skeleton of the page that provides the structure and design of the page.</p>
				</div>
				<div className="tool-container">
					<div className="javascript-icon icon"></div>
					<h4>javascript</h4>
					<p>Javascript is the brains of the web application. It is a very powerful language and when used right, creates a very powerful application. ECMAScript2015 (ES2015) is the new standard for Javascript and is popular with libraries such as React and Node.js.</p>
				</div>
				<div className="tool-container">
					<div className="angular-icon icon"></div>
					<h4>angularjs</h4>
					<p>Angularjs is a Javascript framework built by a little company known as Google. It is a very powerful framework that contains all the funtionality you could need. Angular 2.x was recently released and includes many improvements over Angular 1.x.</p>
				</div>
				<div className="tool-container">
					<div className="react-icon icon"></div>
					<h4>react</h4>
					<p>React is a fairly new technology that has gained a lot of popularity. Built by Facebook, React strengths include it's modular design and blazing speeds. React has become my client-side library of choice.</p>
				</div>
				<div className="tool-container">
					<div className="node-icon icon"></div>
					<h4>node.js</h4>
					<p>Node.js is a runtime environment that is most often used to code the back-end or server-side portion of web applications. I use Express with MongoDB to complete node applications.</p>
				</div>																			
			</div>
		</div>
	);
}

