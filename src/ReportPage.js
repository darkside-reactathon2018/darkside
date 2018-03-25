import React, { Component } from "react";
import styled from "styled-components";
import * as yes from "./yes.png";
import * as no from "./no.png";
import request from "request";
import { Redirect } from "react-router-dom";

const Container = styled.div`
  border: 1px solid var(--light-pink);
  border-radius: 5px;
  margin: 100px auto;
  width: 500px;
`;

const ImageContainer = styled.div`

  &:hover {
    border-radius: 5px;
    box-shadow: 0 2px 10px var(--pink);
  }
`;

const Thumbs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Thumb = styled.i`
  font-size: 35px;
  color: var(--blue);
  padding: 20px;

  &:hover {
    color: var(--orange);
  }
`;

class ReportPage extends Component {
  state = {
    yesOrNo: null
  }

  handleClick = newState => {
    console.log(newState)
    if (newState) {
      this.setState({ 
        redirect: true,
        path: "/chat",
        yesOrNo: true
        });
    } else {
      this.setState({
        redirect: true,
        yesOrNo: false
      })
    }
  };

  render() {
    if (this.state.redirect) {
      return this.state.yesOrNo ? <Redirect to={this.state.path}/> : <h3>Sorry, your date didn't like you back.</h3>
    }

    return (
      <Container>
        <h1 style={{textAlign: "center"}}>How was it?</h1>
        <Thumbs>
          <span onClick={() => this.handleClick(true)}><Thumb className="far fa-thumbs-up"></Thumb></span>          
          <span onClick={() => this.handleClick(false)}><Thumb className="far fa-thumbs-down"></Thumb></span>
        </Thumbs>
      </Container>
    );
  }
}

export default ReportPage;