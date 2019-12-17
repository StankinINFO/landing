import React, { Component } from 'react'
import {Carousel, Typography} from "antd";
import IconsGroup from "../IconsGroup/IconsGroup";
import './FeaturesCarousel.css'

const { Text } = Typography

export default class FeaturesCarousel extends Component {

    constructor(props) {
        super(props)
        this.slider = React.createRef()
    }

    handleIconSelect = (id) => {
        const { onSelectHandle, slides } = this.props

        const currentSlideNumb = Number(id)
        const currentSlideName = slides[currentSlideNumb].name

        this.slider.current.goTo(currentSlideNumb)

        onSelectHandle(currentSlideName)
    }

    render() {

        const { slides, current } = this.props

        let currentSlide = slides.findIndex( slide => slide.name === current )
        currentSlide = currentSlide !== -1 ? currentSlide : 0

        return (
            <div>
                <IconsGroup
                    onSelectHandle={this.handleIconSelect}
                    current={currentSlide}
                >
                    {
                        slides.map((slide, i) => (
                            <img id={i} className="sliderIcon" src={slide.icon} />
                        ))
                    }
                </IconsGroup>
                <Carousel dots={false} ref={ this.slider }>
                    {
                        slides.map(slide => {

                            const { text, formImage } = slide

                            return (
                                <div className="slideContainer">
                                    <Text style={{color: "#11116e", fontSize: "1.2rem"}}>
                                        { text }
                                    </Text>
                                    <div className="phoneFrameImage">
                                        { formImage &&
                                        <img className="slideFormImage" src={ formImage }/>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        );
    }
}
