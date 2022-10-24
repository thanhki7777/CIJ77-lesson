import React from "react";
import PropTypes from 'prop-types'
// import { Carousel, CarouselItem } from "react-bootstrap";
// import { lists } from "../../data/store.js";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {useState} from 'react'
import {SliderData} from "../../data/imageslider"

function Carouse({slides}) {
    const [current,setCurrent] = useState(0)
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current == length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current == length - 1 ? 0 : current - 1)
    }
    return (
        <div className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          
          
               {SliderData.map((slide,index) => {
                return (
                    <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}>
                    {index == current && (<img src={slide.image} alt = ""></img>)}</div>
         )})}
               
        </div>
    )
}

// CarouselItem.prototype = {
//     img: PropTypes.string.isRequired
// }
export default Carouse
