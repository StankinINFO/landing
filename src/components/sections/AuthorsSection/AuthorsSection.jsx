import React, {Component} from 'react'
import {Avatar} from 'antd'
import connect from "react-redux/es/connect/connect"
import {selectLocale} from "../../../store/selectors/common"
import { localization } from '../../../constants/locale'
import './AuthorsSection.css'

import matericin from '../../../static/img/avatars/Materikin.png'
import muslimov from '../../../static/img/avatars/Muslimov.png'
import ermakov from '../../../static/img/avatars/Ermakov.png'
import balagansky from '../../../static/img/avatars/Balagansky.png'
import kolyachenko from '../../../static/img/avatars/Kolyachenko.png'
import kirsakova from '../../../static/img/avatars/Kirsakova.png'
import nikonorov from '../../../static/img/avatars/Nikonorov.png'


class AuthorsSection extends Component {
    render() {

        const text = localization[this.props.locale].authorsSectionText

        const authors = [
            {
                name: text.matericin,
                role: `${text.teamLead}, ${text.programmer}`,
                img: matericin,
            },
            {
                name: text.muslimov,
                role: `${text.scrumMaster}, ${text.analyst}`,
                img: muslimov,
            },
            {
                name: text.kirsakova,
                role: text.designer,
                img: kirsakova,
            },
            {
                name: text.ermakov,
                role: text.programmer,
                img: ermakov,
            },
            {
                name: text.balagansky,
                role: text.programmer,
                img: balagansky,
            },
            {
                name: text.kolyachenko,
                role: text.programmer,
                img: kolyachenko,
            },
            {
                name: text.nikonorov,
                role: text.programmer,
                img: nikonorov,
            },
        ]

        return (
            <div className="authorsMainSection">
                <div className="authors">
                    <span>{text.authorsSectionTitle0}<span>{text.authorsSectionTitle1}</span>{text.authorsSectionTitle2}</span>
                    <div className="authorsGroup">
                        {authors.map((author, i) => {

                            const avatar = author.img ? <Avatar src={author.img}/> :
                                <Avatar icon="user"/>

                            return (
                                <div className="authorInfo">
                                    {avatar}
                                    <div>
                                        <span className="authorName">{author.name}</span>
                                        <span className="authorRole">{author.role}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    locale: selectLocale(state)
})

export default connect(mapStateToProps, null)(AuthorsSection)
