import React from "react";
import * as yes from "./yes.png";
import * as no from "./no.png";

class ReportPage extends React.Component {
    constructor(props) {
        super(props);
    }
    yes() {

    }

    no() {

    }

    render(){
        return(
            <div className="centre-box">
                <div className="question">How was it?</div>
                <div>
                    <img src={yes} className="img-select" onClick={this.yes}/><span>Yes? </span>
                    <img src={no} className="img-select" onClick={this.no}/><span>No? </span>
                </div>
            </div>
        );
    }
}

export default ReportPage;