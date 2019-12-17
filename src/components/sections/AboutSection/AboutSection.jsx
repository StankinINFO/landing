import React, {Component} from 'react'
import {Row, Col, Typography} from 'antd'
import './AboutSection.css'
import handImage from '../../../static/img/hand2.png'
import googlePlayBadge from '../../../static/img/google-play-badge.svg'
import appStoreBadge from '../../../static/img/app-store-badge.svg'


const {Title, Text} = Typography

export default class AboutSection extends Component {
    render() {
        return (
            <div className="aboutSectionMainContainer">
                <div>
                    <Title class="aboutSectionTitle">Станкин в <span
                        className="aboutTitleBold">ТВОИХ</span> руках!</Title>
                </div>
                <div className="descriptionMainContainer">
                    <div className="handContainer">
                        <img id="handImage" src={handImage}/>
                    </div>
                    <div className="appDescriptionContainer">
                        <div>
                            <Title level={3} style={{color: "white", margin: "50px 0"}}>Вся информация о ТВОЁМ университете</Title>
                            <div id="appDescriptionText">
                                <Text style={{color: "white", fontSize: "1.2rem"}} >Соберите все свои скидочные, банковские и транспортные карты в смартфоне. Используйте
                                    их для удобного и выгодного шопинга.</Text>
                            </div>
                            <div id="storeBadgesContainer">
                                <img src={googlePlayBadge}/>
                                <img src={appStoreBadge}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
