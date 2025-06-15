import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

function ImageCarousel() {
  return (
    <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
        transitionTime={800}
        stopOnHover={false}
        swipeable={false}
        emulateTouch={false}
    >
        <div className="custom-slide">
            <img src="/images/fimage1.JPG" alt="Slide 1" />
        </div>
        <div className="custom-slide">
            <img src="/images/fimage2.JPG" alt="Slide 2" />
        </div>
        <div className="custom-slide">
            <img src="/images/fimage3.png" alt="Slide 3" />
        </div>
    </Carousel>
  );
}

export default ImageCarousel