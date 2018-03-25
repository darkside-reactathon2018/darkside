import React from "react";
import * as yes from "./yes.png";
import * as no from "./no.png";
import request from 'request';
import {Redirect} from 'react-router-dom'


class ReportPage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        yesOrNo: null,
        response:null
    }

    yes() {
        console.log("yes");
        this.sendAndWaitForResponse(true);

    }

    no() {
       console.log("no");
        this.setState({response:false});
    }
    //placeholder until endpoint
    sendAndWaitForResponse(yesOrNo){
        
        this.setState({response:true});
    }


    
    render() {
        if(this.state.response===true){
            return <Redirect push to="/chat" />;
        } else if (this.state.response===false){
            return <Redirect push to="/" />;
        }
        return(
            <div className="centre-box">
                <div className="question">How was it?</div>
                <div className="inner-box">
                    <span className="img-box">
                        <img src={yes} className="img-select" id="yes" onClick={this.yes.bind(this)}/>
                        </span>
                    <span className="img-box">
                        <img src={no} className="img-select" id="no" onClick={this.no.bind(this)}/>
                    </span>
                </div>
            </div>
        );
    }
}

export default ReportPage;