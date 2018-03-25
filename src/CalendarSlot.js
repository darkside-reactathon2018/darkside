import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  width: 12vw;
  border: 1px solid #fff;
  background-color: ${props => props.background ? "var(--pink)" : "var(--light-pink)" };
`;

class CalendarSlot extends Component {
  state = {
    isSelected: false
  }

  handleSelect = event => {
    this.setState(state => ({
      isSelected: !state.isSelected
    }))
  }


  render () {
    return (
      <Container onClick={this.handleSelect} background={this.state.isSelected}>
      </Container>

      );
  }
}

export default CalendarSlot;