import React, { Component } from "react";
import {Link} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };

        // console.log('constructor');
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // this.state = {date : new Date()};
        this.setState({ date: new Date() });

    }
    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left" >
                        <h1 className="text-success" >
                            Testing Chart App
                        </h1>

                    </div>
                    <div className="col-md-4 text-right" >
                        <h6 className="text-muted mt-4" >
                            {this.state.date.toLocaleTimeString()}
                        </h6>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link className="text-success" to="/">หน้าหลัก</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link className="text-success" to="/about">เกี่ยวกับเรา</Link></li>
                            <li className="list-inline-item">|</li>
                        </ul>

                    </div>

                </div>
            </div>
        )
    }
}

export default Header;