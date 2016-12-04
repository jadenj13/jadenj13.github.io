'use strict';

import React from 'react';

import Navbar from './Navbar';
import LandingSection from './LandingSection';
import AboutSection from './AboutSection';
import ProcessSection from './ProcessSection';

export default function(props) {
	return (
		<div>
			<Navbar />
			<LandingSection />
			<AboutSection />
			<ProcessSection />
		</div>
	);
};