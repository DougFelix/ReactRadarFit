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
        let list = [];
        list = this.state.data.map(item =>
            <Carousel.Item>
                {this.isVideo(item) ? (
                    <video controls autoPlay className="d-block w-100">
                        <source src={item.url} type="video/mp4"></source>
                    </video>
                ) : (
                    <img
                    className="d-block w-100"
                    src={item.url}
                    alt='dog'
                    />
                )}
                <Carousel.Caption>
                    <h3>Dog</h3>
                </Carousel.Caption>
            </Carousel.Item>
        );
        return list;
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
