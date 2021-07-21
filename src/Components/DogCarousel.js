import React, { Component } from 'react';
import './DogCarousel.css';
import { v4 as uuidv4 } from "uuid";
import Carousel from 'react-bootstrap/Carousel'

class DogCarousel extends Component {

    isVideo (url) {
        if(url.endsWith('.mp4') || url.endsWith('.webm')) {
            return true;
        } else {
            return false;
        }
    }

    mountCarouselItem (){
        let {data} = this.props;
        let list = [];
        if(Array.isArray(data) && data.length !== 0) {
            list = data.map(item =>
               <Carousel.Item key={uuidv4()}>
                    <div className="container carousel-inner">
                        {this.isVideo(item) ? (
                            <video
                            controls
                            loop
                            className="d-block w-100 figure">
                                <source src={item} type="video/mp4"></source>
                            </video>
                        ) : (
                            <img
                            className="d-block w-100 figure"
                            src={item}
                            alt='dog'
                            />
                        )}
                    </div>
                    <Carousel.Caption>
                        <h3>Dog</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        }
        return list;
    }

    render() { 
        let carouselList = this.mountCarouselItem();

        return (
            <div className='DogCarousel'>
                <div className='DogCarousel-Title'>Dog Carousel</div>
                <div className='container-fluid'>
                    <Carousel>
                        {carouselList}
                    </Carousel>
                </div>
            </div> 
        );
    }
}
 
export default DogCarousel;