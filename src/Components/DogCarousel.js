import React, { Component } from 'react';
import Dog from './Dog';
import './DogCarousel.css';
import { v4 as uuidv4 } from "uuid";

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

    mountCarouselItem (){
        let list = [];
        if(Array.isArray(this.state.data) && this.state.data.length !== 0) {
            list = this.state.data.map(item =>
                <Dog item={item} />
            );
        }
        return list;
    }

    render() { 
        let carouselList = this.mountCarouselItem();

        return (
            <div>
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
