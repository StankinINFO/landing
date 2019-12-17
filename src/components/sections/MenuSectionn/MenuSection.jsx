import React, {Component} from 'react';
import './MenuSection.css';
import  stankinLogo from '../../../static/img/stankinInfoXL.png'

export default class MenuSection extends Component {

    render() {
        return (
            <div id="headerMainContainer">
                <div className="col-3" />
                <div className="col-4 stankinLogoContainer">
                    <img className="stankinLogo" src={ stankinLogo } />
                </div>
                <div className="col-3 menuItems">
                    <div id="menuLocaleSeparator"/><span className="localeBadge">EN</span>
                </div>
            </div>
        );
    }
}
