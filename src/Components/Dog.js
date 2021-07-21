import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Dog extends Component {
    constructor(props){
        super(props);
        this.isVideo = this.isVideo.bind(this);
    }

    isVideo (url) {
        if(url.endsWith('.mp4')) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        let {item} = this.props;
        return (
            <Carousel.Item className="Carousel-Item">
                    {this.isVideo(item) ? (
                        <video
                        controls
                        autoPlay
                        loop
                        className="d-block w-100">
                            <source src={item} type="video/mp4"></source>
                        </video>
                    ) : (
                        <img
                        className="d-block w-100"
                        src={item}
                        alt='dog'
                        />
                    )}
                    <Carousel.Caption>
                        <h3>Dog</h3>
                    </Carousel.Caption>
                </Carousel.Item>
        );
    }
}
 
export default Dog;