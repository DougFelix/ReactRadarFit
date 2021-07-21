import React, { Component } from 'react';
import Dog from './Dog';
import './DogCarousel.css';

import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class DogCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    isVideo (url) {
        //TODO
    }

    mountCarouselItem (){
        <Carousel.Item>
            {item.videoURL ? (
                <video controls autoPlay>
                    <source src={'https://random.dog/d3cb771f-f861-4dd7-a672-2cff954a264b.mp4'} type="video/mp4"></source>
                </video>
            ) : (
                <img
                className="d-block w-100"
                src={'https://random.dog/37d8a447-7ea0-4113-bcd6-3c123c55d648.gif'}
                alt='1'
                />
            )}
            <Carousel.Caption>
                <h3>Third Demo</h3>
            </Carousel.Caption>
        </Carousel.Item>
    }

    render() { 
        let carouselList = this.mountCarouselItem(this.state.data);

        return (
            <div>
                <div class='container-fluid' >  
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <div className="col-sm-12"> 
                        Dog Carousel
                        </div>
                    </div>
                </div>
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



// getDog(){
//     try {
//         axios.get('https://random.dog/woof.json')
//         .then(function (response) {
//             console.log(response.data)
//         })            
//     } 
//     catch (e) {
//         alert(e);
//     }
// }
