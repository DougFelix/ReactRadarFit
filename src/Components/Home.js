import React, { Component } from 'react';
import DogCarousel from './DogCarousel';

import axios from 'axios';

class Home extends Component {
    // DEFAULT PROPS
    static defaultProps = {
        max: 10
    }
    // CONSTRUCTOR AND INITIAL STATE
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    // GET DOGS WHEN LOADED
    componentDidMount(){
        this.getDogs();
    }

    // AXIOS.GET DOGS TO CREATE THE CAROUSEL
    async getDogs(){
        try {
            let urls = [];
            let count = 0;
            // NUMBER OF DOGS DEFINED BY PROPS.MAX
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

    render() { 
        let {data} = this.state;
        return (
            <div className="Home">
                <DogCarousel data={data} />
            </div>
        );
    }
}
 
export default Home;