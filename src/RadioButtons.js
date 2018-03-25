import React, { Component } from "react";
import styled from "styled-components";

const Radio = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: var(--blue);
  margin: 10px;
`;

const Selected = styled.div`
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: var(--light-pink);
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class RadioButton extends Component {
  state = {
    isTrue: true
  }

  handleClick = (newState) => {
    this.setState(state => ({
      isTrue: newState
    }))
  }

  render() {
    return (
      <div style={{display: "flex", alignItems: "center"}}>
        YES
        <Container>
        <Radio value={true} onClick={() => this.handleClick(true)}/>
        { this.state.isTrue && <Selected/> }
        </Container>
        NO
        <Container>
        <Radio value={false} onClick={() => this.handleClick(false)}/>
        { !this.state.isTrue && <Selected/> }
        </Container>
      </div>
      );
  }
}

export default RadioButton;