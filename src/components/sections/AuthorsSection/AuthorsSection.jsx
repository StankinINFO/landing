import React, {Component} from 'react'
import {Avatar} from 'antd'
import './AuthorsSection.css'

import matericin from '../../../static/img/avatars/Materikin.png'
import muslimov from '../../../static/img/avatars/Muslimov.png'
import ermakov from '../../../static/img/avatars/Ermakov.png'
import balagansky from '../../../static/img/avatars/Balagansky.png'
import kolyachenko from '../../../static/img/avatars/Kolyachenko.png'
import kirsakova from '../../../static/img/avatars/Kirsakova.png'
import nikonorov from '../../../static/img/avatars/Nikonorov.png'

const authors = [
    {
        name: 'Василий Материкин',
        role: 'Руководитель, программист',
        img: matericin,
    },
    {
        name: 'Данияр Муслимов',
        role: 'Scrum-master, аналитик',
        img: muslimov,
    },
    {
        name: 'Ксения Кирсакова',
        role: ' Дизайнер',
        img: kirsakova,
    },
    {
        name: 'Александр Ермаков',
        role: 'Программист',
        img: ermakov,
    },
    {
        name: ' Алексей Балаганский',
        role: 'Программист',
        img: balagansky,
    },
    {
        name: 'Максим Коляченко',
        role: 'Программист',
        img: kolyachenko,
    },
    {
        name: 'Даниил Никоноров',
        role: 'Программист',
        img: nikonorov,
    },
]

export default class AuthorsSection extends Component {
    render() {
        return (
            <div className="authorsMainSection">
                <div className="authors">
                    <span>Делают <span>ВСЁ</span> возможное</span>
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
