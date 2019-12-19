import React from 'react';
import AboutSection from "../AboutSection/AboutSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import AuthorsSection from "../AuthorsSection/AuthorsSection";
import './ContentSection.css';
import SoonSection from "../SoonSection/SoonSection";

export default class ContentSection extends React.Component {

    render() {
        return (
            <div className="appContentMainContainer">
                <AboutSection/>
                <FeatureSection/>
                <SoonSection  />
                <AuthorsSection/>
            </div>
        );
    }
}
