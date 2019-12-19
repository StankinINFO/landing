import React, {Component} from 'react'
import './FooterSection.css'
import stankinWhiteLogo from '../../../static/img/stankinWhiteLogo.png'


export default class FooterSection extends Component {
    render() {
        return (
            <div className="footerMainSection">
                <div className="stankinFooterLogoContainer">
                    <div className="stankinFooterLogo">
                        <img src={stankinWhiteLogo}/>
                        <span>Inet 2019 contest</span>
                    </div>
                </div>
            </div>
        );
    }
}
