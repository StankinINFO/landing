import React, { Component } from 'react'
import {Carousel} from "antd";
import './FeaturesCarousel.css'


export default class FeaturesCarousel extends Component {

    constructor(props) {
        super(props)
        this.sliderIcon = React.createRef()
    }

    handleIconSelect = (id) => {
        const { onSelectHandle, slides } = this.props

        const currentSlideNumb = Number(id)
        const currentSlideName = slides[currentSlideNumb].name

        this.slider.current.goTo(currentSlideNumb)

        onSelectHandle(currentSlideName)
    }

    handleSlideBeforeChange = () => {
        this.sliderIcon.current.className = 'sliderIcon fadeOut'
    }

    handleSlideAfterChange = (numb) => {
        this.props.onSelectHandle(numb)
        this.sliderIcon.current.className = 'sliderIcon'
    }

    render() {

        const { slides, current } = this.props
        const currentSlide = slides[current]

        return (
            <div>
                <div className="sliderIconContainer">
                    <img className="sliderIcon" ref={ this.sliderIcon } src={currentSlide.icon} />
                </div>
                <Carousel
                    dots={true}
                    dotPosition="top"
                    autoplay
                    beforeChange={this.handleSlideBeforeChange}
                    afterChange={this.handleSlideAfterChange}
                >
                    {
                        slides.map(slide => {

                            const { text, formImage } = slide

                            return (
                                <div className="slideContainer">
                                    <span style={{color: "#11116e", fontSize: "1.2rem"}}>
                                        { text }
                                    </span>
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
