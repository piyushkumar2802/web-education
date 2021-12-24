import React, { Component } from "react";
import Imgtech from "./image/Technoloy.jpg";

class Technology extends Component {
    render() {
        return (
            <div className="container">
                <header style={header}>
                    <h1 style={title}>The Languages of Computer Science</h1>
                </header>
                <div className="row">
                    <div className="col-12">
                        <div className="enter-content">
                            <p>
                                Computer programming languages have been an important part of computer science and every major
                                technological development in recent times. They are used to create form and function to just
                                about everything we use, including smartphones, electronics and websites. As programmers become
                                more skilled and adept at writing programs, the quality and intelligence of the technological
                                devices we engage with continue to improve, and the languages of computer science will continue
                                to evolve.
                            </p>
                            <hr />
                            <img src={Imgtech} alt="img not found" style={{width:"100%"}}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
const header={
    marginTop:"7%",
}
const title={
    color:"#fba62f"
}

export default Technology;
