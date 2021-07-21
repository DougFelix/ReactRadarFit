import React, { Component } from 'react';
import Dog from './Dog';
import axios from 'axios';

class DogCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    render() { 
        return (
            <div>
                <Dog/>
            </div>
        );
    }
}
 
export default DogCarousel;