import React from 'react';
import {Empty} from 'antd'
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
                {/*<div style={*/}
                    {/*{*/}
                        {/*height: "600px",*/}
                        {/*background: "white",*/}
                        {/*display: "flex",*/}
                        {/*justifyContent: "center",*/}
                        {/*alignItems: "center"*/}
                    {/*}*/}
                {/*}>*/}
                    {/*<Empty description={<span>Скоро тут будет ещё один раздел</span>}/>*/}
                {/*</div>*/}
                <SoonSection  />
                <AuthorsSection/>
            </div>
        );
    }
}
