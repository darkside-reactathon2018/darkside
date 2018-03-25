import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const DateContainer = styled.div`
  border: 1px solid var(--light-pink);
  padding: 10px;
  border-radius: 5px;
  margin: 20px 0;
`;

const Button = styled.span`
  background-color: ${props => props.background};
  color: ${props => props.color};
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Name = styled.h3`
  padding-left: 20px;
`;

const PendingStyle = styled.h2`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-direction: column; 
`;

class Schedule extends Component {
  state = {
    isPending: true,
    isLiveNow: false
  };

  componentWillMount() {
    setTimeout(this.handlePending, 2000);
    setTimeout(this.handleMakeLive, 5000);
  }

  handlePending = () => {
    this.setState({
      isPending: false
    });
  };

  handleMakeLive = () => {
    this.setState({
      isLiveNow: true
    });
  };

  handleRedirect = event => {
    this.setState({
      redirect: true,
      path: "/video"
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.path} />
    }

    const { isLiveNow } = this.state;
    const stateText = isLiveNow
      ? "Go Date is on NOW!"
      : "1 minute till your date begins";
    return (
      <div>
        {this.state.isPending && (
          <PendingStyle>
            <CircleLoader color="var(--blue)" style={{margin: "50px auto"}}/>
            <span style={{paddingTop: "20px"}}>We are working hard to find you the perfect date...</span>
          </PendingStyle>
        )}
        {!this.state.isPending && (
          <div style={{ margin: "50px" }}>
            <h3>You have a date with:</h3>
            <DateContainer>
              <Name>Clara</Name>
              <ButtonContainer>
              <span> on Sunday at 2:30pm </span>
              <div>
              <Button
                background={this.state.isLiveNow ? "var(--blue)" : "#efefef"}
                color={this.state.isLiveNow ? "#fff" : "var(--dark-grey)"}
                onClick={this.handleRedirect}
              >
                {stateText}
              </Button>
              <Button background="var(--pink)" color="#fff">Decline</Button>
              </div>
              </ButtonContainer>
            </DateContainer>
            <DateContainer>
              <Name>Jamie</Name>
              <ButtonContainer>
              <span> on Monday at 5:30pm </span>
              <div>
              <Button background="#efefef" color="var(--dark-grey)">
                1 day more till your date
              </Button>
              <Button background="var(--pink)" color="#fff">Decline</Button>
              </div>
              </ButtonContainer>
            </DateContainer>
          </div>
        )}
      </div>
    );
  }
}

export default Schedule;