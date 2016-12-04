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
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ad debitis quidem odio consectetur itaque quisquam possimus accusantium eius! Recusandae nulla vitae dolorem et consectetur natus, fugit iure voluptates non.</p>
				</div>
				<div className = "process-container">
					<div className="build-icon icon"></div>
					<h4>build</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ad debitis quidem odio consectetur itaque quisquam possimus accusantium eius! Recusandae nulla vitae dolorem et consectetur natus, fugit iure voluptates non.</p>
				</div>
				<div className = "process-container">
					<div className="deploy-icon icon"></div>
					<h4>deploy</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ad debitis quidem odio consectetur itaque quisquam possimus accusantium eius! Recusandae nulla vitae dolorem et consectetur natus, fugit iure voluptates non.</p>
				</div>
			</div>
		</div>
	);
}
