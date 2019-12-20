import React, {Component} from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import SampleChart from "../components/charts/SampleChart";





class Home extends Component {

    render() {
        return (
            <div>
                < Header/>
                <div className="container" style={{width: 1000}}>
                    < SampleChart/>
                </div>


                <Footer company="Delta" email="aonchicken@gmail.com" />
            </div>
        );
    }
}

export default Home;