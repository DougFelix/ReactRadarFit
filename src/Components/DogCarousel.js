import React, { Component } from 'react';
import Dog from './Dog';
import './DogCarousel.css';

import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class DogCarousel extends Component {

    static defaultProps = {
        max: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount(){
        this.getDogs();
    }

    async getDogs(){
        try {
            let urls = [];
            let count = 0;
            while(count < this.props.max){
                let data = await axios.get('https://random.dog/woof.json');
                let dog = data.data.url;
                urls.push(dog);
                count++;
            }
            this.setState({data: urls});
        } catch (e) {
            console.log(e);
        }
    }

    isVideo (url) {
        if(url.endsWith('.mp4')) {
            return true;
        } else {
            return false;
        }
    }

    mountCarouselItem (){
        let list = [];
        if(Array.isArray(this.state.data) && this.state.data.length !== 0) {
            list = this.state.data.map(item =>
                <Carousel.Item>
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
        return list;
    }

    render() { 
        let carouselList = this.mountCarouselItem();

        return (
            <div>
                <div className='container-fluid' >  
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
