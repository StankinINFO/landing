import React, {Component} from 'react'
import {Typography} from "antd";
import FeaturesCarousel from "../../common/FeaturesCarousel/FeaturesCarousel";
import './FeatureSection.css'

import newsIcon from '../../../static/img/sliderIcons/news.png'
import scheduleIcon from '../../../static/img/sliderIcons/schedule.png'
import modulesIcon from '../../../static/img/sliderIcons/modules.png'
import informationIcon from '../../../static/img/sliderIcons/modules.png'

import newsDisplay from '../../../static/img/appDisplays/news.png'
import modulesDisplay from '../../../static/img/appDisplays/modules.png'
import scheduleDisplay from '../../../static/img/appDisplays/schedule.png'
import infoDisplay from '../../../static/img/appDisplays/infoDisplay.png'


const {Title} = Typography
const slides = [
    {
        name: 'schedule',
        text: 'Знать расписание на любой день, название предмета, время и место занятия.',
        icon: scheduleIcon,
        formImage: scheduleDisplay,
    },
    {
        name: 'modules',
        text: 'Получать полную информацию о модулях за всё время обучения. Оценки за модули, зачёты, экзамены.',
        icon: modulesIcon,
        formImage: modulesDisplay,
    },
    {
        name: 'news',
        text: 'Быть в курсе последних новостей университета и деканата. Читать о них коротко или подробно.',
        icon: newsIcon,
        formImage: newsDisplay,
    },
    {
        name: 'information',
        text: 'Иметь под рукой самую важную информацию об университете.',
        icon: informationIcon,
        formImage: infoDisplay,
    },
]

export default class FeatureSection extends Component {

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
