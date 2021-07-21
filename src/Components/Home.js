import React, { Component } from 'react';
import DogCarousel from './DogCarousel';

import axios from 'axios';

class Home extends Component {

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
        console.log('hi mount');
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