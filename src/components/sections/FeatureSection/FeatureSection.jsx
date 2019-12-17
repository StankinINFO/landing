import React, {Component} from 'react'
import {Typography} from "antd";
import FeaturesCarousel from "../../common/FeaturesCarousel/FeaturesCarousel";
import './FeatureSection.css'

import newsIsometricColored from '../../../static/img/newIsometricColored.svg'
import newsIsometric from '../../../static/img/newIsometric.svg'
import calendar from '../../../static/img/calendarColored.svg'
import modules from '../../../static/img/journal.svg'
import information from '../../../static/img/information.svg'

import newsDisplay from '../../../static/img/appDisplays/news.png'
import modulesDisplay from '../../../static/img/appDisplays/modules.png'
import scheduleDisplay from '../../../static/img/appDisplays/schedule.png'
import infoDisplay from '../../../static/img/appDisplays/infoDisplay.png'


const {Title} = Typography
const slides = [
    {
        name: 'schedule',
        text: 'Узнавать расписание на любой день, вспоминать название предмета, имя преподавателя, время и место занятия.',
        icon: calendar,
        formImage: scheduleDisplay,
    },
    {
        name: 'modules',
        text: 'Получать полную информацию о модулях за всё время обучения. Оценки за модули, зачёты, экзамены.',
        icon: modules,
        formImage: modulesDisplay,
    },
    {
        name: 'news',
        text: 'Быть в курсе последних новостей университета. Читать о них коротко или подробно. Все новости или только новости деканата.',
        icon: newsIsometricColored,
        formImage: newsDisplay,
    },
    {
        name: 'information',
        text: 'Иметь под рукой самую важную информацию об университете.',
        icon: information,
        formImage: infoDisplay,
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
