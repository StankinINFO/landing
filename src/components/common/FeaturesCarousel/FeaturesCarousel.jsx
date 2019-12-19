import React, { Component } from 'react'
import {Carousel} from "antd";
import './FeaturesCarousel.css'

const sliderTiming = 4000

export default class FeaturesCarousel extends Component {

    constructor(props) {
        super(props)
        this.slider = React.createRef()
        this.sliderIcon = React.createRef()
        this.state = {
            touchStartX: null,
            intervalId: null,
        }
    }

    componentDidMount() {
        const timeoutId = setTimeout(() => this.slider.current.next(), sliderTiming)
        this.setState({
            ...this.state,
            timeoutId
        })
    }

    handleSlideBeforeChange = () => {
        this.sliderIcon.current.className = 'sliderIcon fadeOut'
    }

    handleSlideAfterChange = (numb) => {
        this.props.onSelectHandle(numb)
        this.sliderIcon.current.className = 'sliderIcon'
        this.restartSliderAutoPlay()
    }

    handleOnTouchStart = (e) => {
        const touchStartX = e.changedTouches[0].screenX
        this.setState({
            touchStartX,
        })
    }

    handleOnTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].screenX
        const { touchStartX } = this.state
        if (touchEndX > touchStartX) {
            this.slider.current.prev()
        } else if (touchEndX < touchStartX) {
            this.slider.current.next()
        }
    }

    restartSliderAutoPlay = () => {
        clearTimeout(this.state.timeoutId)
        const timeoutId = setTimeout(() => this.slider.current.next(), sliderTiming)
        this.setState({
            ...this.state,
            timeoutId
        })
    }

    render() {

        const { slides, current } = this.props
        const currentSlide = slides[current]

        return (
            <div>
                <div className="sliderIconContainer">
                    <img
                        className="sliderIcon"
                        ref={ this.sliderIcon }
                        src={currentSlide.icon}
                        onTouchStart={ this.handleOnTouchStart }
                        onTouchEnd={ this.handleOnTouchEnd }
                    />
                </div>
                <Carousel
                    dots={true}
                    dotPosition="top"
                    beforeChange={this.handleSlideBeforeChange}
                    afterChange={this.handleSlideAfterChange}
                    ref={ this.slider }
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
