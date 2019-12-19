import React, {Component} from 'react'
import {Typography} from "antd";
import connect from "react-redux/es/connect/connect"
import {selectLocale} from "../../../store/selectors/common"
import { localization } from '../../../constants/locale'
import FeaturesCarousel from "../../common/FeaturesCarousel/FeaturesCarousel";
import './FeatureSection.css'

import newsIcon from '../../../static/img/sliderIcons/news.png'
import scheduleIcon from '../../../static/img/sliderIcons/schedule.png'
import modulesIcon from '../../../static/img/sliderIcons/modules.png'
import informationIcon from '../../../static/img/sliderIcons/info.png'

import newsDisplay from '../../../static/img/appDisplays/news.png'
import modulesDisplay from '../../../static/img/appDisplays/modules.png'
import scheduleDisplay from '../../../static/img/appDisplays/schedule.png'
import infoDisplay from '../../../static/img/appDisplays/infoDisplay.png'


const {Title} = Typography

class FeatureSection extends Component {

    state = {
        selectedIcon: 0
    }

    iconOnSelectHandler = (id) => {
        this.setState({
            ...this.state,
            selectedIcon: id
        })
    }

    render() {

        const text = localization[this.props.locale].featureSectionText

        const slides = [
            {
                name: 'schedule',
                text: text.scheduleSlideText,
                icon: scheduleIcon,
                formImage: scheduleDisplay,
            },
            {
                name: 'modules',
                text: text.modulesSlideText,
                icon: modulesIcon,
                formImage: modulesDisplay,
            },
            {
                name: 'news',
                text: text.newsSlideText,
                icon: newsIcon,
                formImage: newsDisplay,
            },
            {
                name: 'information',
                text: text.infoSlideText,
                icon: informationIcon,
                formImage: infoDisplay,
            },
        ]

        const {selectedIcon} = this.state

        return (
            <div id="featureSectionMainContainer">
                <div id="featureSectionTitle">
                    <Title id="featureSectionTitle">{text.featureSectionTitle0}<span className="bold">{text.featureSectionTitle1}</span></Title>
                </div>
                <div>
                    <FeaturesCarousel
                        slides={ slides }
                        onSelectHandle={this.iconOnSelectHandler}
                        current={selectedIcon}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    locale: selectLocale(state)
})

export default connect(mapStateToProps, null)(FeatureSection)
