import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return(
        <div>
            <Header/>
            <div className="container col-md-5">
                <h3>Welcome</h3>
                <p className="title text-justify mt-4 mb-4">
                    Detail........................
                    iiiiiiiiiiiiiiiiiiiiiiiiiiiiii
                    pppppppppppppppppppppppppppppp
                </p>
                <h4 className="text-success">from Delta TTDD</h4>
            </div>
            <Footer company="Delta" email="aonchicken@gmail.com"/>
        </div>
    )
}

export default About;