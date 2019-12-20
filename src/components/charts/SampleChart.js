import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-lineheight-annotation';
import axios from "axios";


let dataPoints = [];
let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
class SampleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: labels,
            datasets: [
                {
                    label: 'Test Data',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: dataPoints
                }
            ]
        };

    }

    getData(){

        axios.get(`http://127.0.0.1:8000/my-own-view/`)
            .then(res => {
                const dataJson = res.data;
                if(dataPoints.length<labels.length){
                    dataPoints.push({
                        y: dataJson[0].y
                    });
                }else {
                    dataPoints.shift();
                    dataPoints.push({
                        y: dataJson[0].y
                    });
                }

                this.setState({ dataJson });
            })
    }

    componentDidMount() {

        setInterval(() => {
            this.getData()
        }, 2000);

    }

    render() {
        return (
            <div>
                <h2>Line Example</h2>
                <Line data={this.state}/>
            </div>
        );
    }
}

export default SampleChart;