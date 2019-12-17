import React from 'react';
import {Typography, Empty} from 'antd'
import AboutSection from "../AboutSection/AboutSection";
import './ContentSection.css';
import FeatureSection from "../FeatureSection/FeatureSection";

const {Title} = Typography

export default class ContentSection extends React.Component {

    render() {
        return (
            <div className="appContentMainContainer">
                <AboutSection/>
                <FeatureSection/>
                <div style={
                    {
                        height: "600px",
                        background: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }>
                    <Empty description={<span>Скоро тут будет ещё один раздел</span>}/>
                </div>
            </div>
        );
    }
}
