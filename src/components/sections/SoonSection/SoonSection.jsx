import React, {Component} from 'react'
import './SoonSection.css'
import schedule from '../../../static/img/soonIcons/schedule.jpg'
import notifications from '../../../static/img/soonIcons/notifications.png'
import info from '../../../static/img/soonIcons/extendInfo.jpg'
import offline from '../../../static/img/soonIcons/offline.jpg'

const soonListItems = [
    {
        name: '1',
        text: 'Уведомления о парах, оценках, новостях',
        img: notifications,
    },
    {
        name: '2',
        text: 'Расширенная информация о ВУЗе, кафедрах, преподавателях',
        img: info
    },
    {
        name: '0',
        text: 'Автообновление расписания',
        img: schedule
    },
    {
        name: '3',
        text: 'Работа приложения offline и синхронизация',
        img: offline
    },
]


export default class SoonSection extends Component {
    render() {
        return (
            <div className="soonMainContainer">
                <span>Скоро <span className="bold">ЕЩЁ</span> больше</span>
                <div className="soonList">
                    {soonListItems.map((listItem) => {
                        const { name, text, img } = listItem
                        return (
                            <div key={ name } className="soonListItem">
                                <div className="soonListImage">
                                    <img src={ img }/>
                                </div>
                                <div className="soonListText">
                                    <span>{ text }</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
