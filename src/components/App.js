'use strict';

import React from 'react';

import Navbar from './Navbar';
import LandingSection from './LandingSection';
import AboutSection from './AboutSection';
import ProcessSection from './ProcessSection';
import ToolsSection from './ToolsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function(props) {
	return (
		<div>
			<Navbar />
			<LandingSection />
			<AboutSection />
			<ProcessSection />
			<ToolsSection />
			<ContactSection />
			<Footer />
		</div>
	);
};