import React from 'react'

import {Carousel} from 'react-bootstrap'
const Carsoel = () => {
    return (
        <div>
            <Carousel interval	={null}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-psd/bi-fold-a5-flyer-mockup-open-cover-perspective-view_144389-239.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-vector/hand-drawn-coffee-shop-instagram-stories_23-2149225897.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-vector/makeup-brushes-with-swatch-eyeshadow-liner_107791-8937.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carsoel
