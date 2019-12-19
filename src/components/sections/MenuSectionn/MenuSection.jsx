import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect"
import {bindActionCreators} from 'redux'
import { triggerLocale } from '../../../store/actions/actions'
import {selectLocale} from "../../../store/selectors/common";
import { localization } from '../../../constants/locale'
import './MenuSection.css';
import  stankinLogo from '../../../static/img/stankinInfoXL.png'

class MenuSection extends Component {

    render() {
        const text = localization[this.props.locale].menuSectionText
        return (
            <div id="headerMainContainer">
                <div className="col-3" />
                <div className="col-4 stankinLogoContainer">
                    <img className="stankinLogo" src={ stankinLogo } />
                </div>
                <div className="col-3 menuItems">
                    <div id="menuLocaleSeparator"/><span className="localeBadge" onClick={this.props.triggerLocale}>{text.localeBadge}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: selectLocale(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    triggerLocale,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MenuSection)
