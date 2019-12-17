import React, {Component} from 'react'
import {Avatar} from 'antd'
import './FooterSection.css'

import stankinWhiteLogo from '../../../static/img/stankinWhiteLogo.png'


const authorsImages = [
    {
        name: 'Василий Материкин',
        role: 'Тимлид',
        img: '',
    },
    {
        name: 'Данияр Муслимов',
        role: 'Аналитик',
        img: '',
    },
    {
        name: 'Александр Ермаков',
        role: 'Scrum-мастер',
        img: '',
    },
    {
        name: 'Василий Материкин',
        role: 'Тимлид',
        img: '',
    },
    {
        name: 'Данияр Муслимов',
        role: 'Аналитик',
        img: '',
    },
    {
        name: 'Александр Ермаков',
        role: 'Scrum-мастер',
        img: '',
    },
]

export default class FooterSection extends Component {
    render() {
        return (
            <div className="footerMainSection">
                <div className="stankinFooterLogoContainer">
                    <div className="stankinFooterLogo">
                        <img src={stankinWhiteLogo}/>
                        <span>Inet 2019 contest</span>
                    </div>
                </div>
                {/*<div className="authors">*/}
                    {/*<span>Авторы</span>*/}
                    {/*<div className="authorsGroup">*/}
                        {/*{authorsImages.map((author, i) => {*/}

                            {/*const avatar = author.img ? <Avatar size={64} src={author.img}/> : <Avatar size={64} icon="user"/>*/}

                            {/*return (*/}
                                {/*<div className="authorInfo">*/}
                                    {/*{avatar}*/}
                                    {/*<span className="authorName">{author.name}</span>*/}
                                    {/*<span className="authorRole">{author.role}</span>*/}
                                {/*</div>*/}
                            {/*)*/}
                        {/*})}*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}
