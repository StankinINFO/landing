import React, {Component} from 'react'
import {Typography} from "antd";
import FeaturesCarousel from "../../common/FeaturesCarousel/FeaturesCarousel";
import './FeatureSection.css'

import newsIsometricColored from '../../../static/img/newIsometricColored.svg'
import newsIsometric from '../../../static/img/newIsometric.svg'
import calendar from '../../../static/img/calendarColored.svg'
import modules from '../../../static/img/journal.svg'
import information from '../../../static/img/information.svg'

import newsDisplay from '../../../static/img/appDisplays/newsDisplay.png'
import modulesDisplay from '../../../static/img/appDisplays/modulesDisplay.png'

const {Title} = Typography
const slides = [
    {
        name: 'calendar',
        text: 'Текст с описанием возможности и экрана, демонстрирующего данную возможность',
        icon: calendar,
        formImage: newsDisplay,
    },
    {
        name: 'modules',
        text: 'Ещё один текст с описанием возможности и экрана, демонстрирующего данную возможность',
        icon: modules,
        formImage: modulesDisplay,
    },
    {
        name: 'news',
        text: 'Снова текст с описанием возможности и экрана, демонстрирующего данную возможность',
        icon: newsIsometricColored,
        formImage: newsDisplay,
    },
    {
        name: 'information',
        text: 'Опять текст с описанием возможности и экрана, демонстрирующего данную возможность',
        icon: information,
        formImage: modulesDisplay,
    },
]

export default class FeatureSection extends Component {

    state = {
        selectedIcon: 'calendar'
    }

    iconOnSelectHandler = (id) => {
        this.setState({
            ...this.state,
            selectedIcon: id
        })
    }

    render() {

        const {selectedIcon} = this.state

        return (
            <div id="featureSectionMainContainer">
                <div id="featureSectionTitle">
                    <Title id="featureSectionTitle">Теперь ты можешь <span className="bold">ВСЁ</span></Title>
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
