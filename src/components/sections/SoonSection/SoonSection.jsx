import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect"
import {selectLocale} from "../../../store/selectors/common"
import { localization } from '../../../constants/locale'
import './SoonSection.css'
import schedule from '../../../static/img/soonIcons/schedule.jpg'
import notifications from '../../../static/img/soonIcons/notifications.png'
import info from '../../../static/img/soonIcons/extendInfo.jpg'
import offline from '../../../static/img/soonIcons/offline.jpg'


class SoonSection extends Component {
    render() {

        const text = localization[this.props.locale].soonSectionText

        const soonListItems = [
            {
                name: 'notifications',
                text: text.notificationText,
                img: notifications,
            },
            {
                name: 'info',
                text: text.infoText,
                img: info
            },
            {
                name: 'schedule',
                text: text.scheduleText,
                img: schedule
            },
            {
                name: 'offline',
                text: text.offlineText,
                img: offline
            },
        ]

        return (
            <div className="soonMainContainer">
                <span>{text.soonSectionTitle0}<span className="bold">{text.soonSectionTitle1}</span>{text.soonSectionTitle2}</span>
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

const mapStateToProps = (state) => ({
    locale: selectLocale(state)
})

export default connect(mapStateToProps, null)(SoonSection)
