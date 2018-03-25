import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import CalendarSlot from "./CalendarSlot";

const Container = styled.div`
  display: flex;
`;

const TimeSlot = styled.span`
  height: 32px;
`;

const DaySlot = styled.span`
  font-weight: 800;
  width: 11vw;
  padding: 8px;
`;

const Button = styled.span`
  margin: 10px;
  background-color: var(--blue);
  color: #fff;
  font-size: 20px;
  border-radius: 15px;
  padding: 10px;

  &:hover {
    box-shadow: 0 2px 10px var(--pink);
    
  }
`;

class Calendar extends Component {
  state ={
    redirect: false,
    path: ""
  }

  handleClick = event => {
    this.setState({
      redirect: true,
      path: "/schedule"
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.path} />
    }
    let slots = [];
    for (var i = 0; i < 21; i++) {
      slots.push(<CalendarSlot idx={i}/>)
    }
    return (
      <div>
      <Container>
        <span style={{width: "80px"}}></span>
        <DaySlot>Monday</DaySlot>
        <DaySlot>Tuesday</DaySlot>
        <DaySlot>Wednesday</DaySlot>
        <DaySlot>Thursday</DaySlot>
        <DaySlot>Friday</DaySlot>
        <DaySlot>Saturday</DaySlot>
        <DaySlot>Sunday</DaySlot>
      </Container>
      <Container>
        <div style={{display: "flex", flexDirection: "column", textAlign: "right", paddingRight: "10px"}}>
          <TimeSlot>8:00 am</TimeSlot>
          <TimeSlot>8:00 am</TimeSlot>
          <TimeSlot>9:00 am</TimeSlot>
          <TimeSlot>9:30 am</TimeSlot>
          <TimeSlot>10:00 am</TimeSlot>
          <TimeSlot>10:30 am</TimeSlot>
          <TimeSlot>11:00 am</TimeSlot>
          <TimeSlot>11:30 am</TimeSlot>
          <TimeSlot>12:00 pm</TimeSlot>
          <TimeSlot>12:30 pm</TimeSlot>
          <TimeSlot>1:00 pm</TimeSlot>
          <TimeSlot>1:30 pm</TimeSlot>
          <TimeSlot>2:00 pm</TimeSlot>
          <TimeSlot>2:30 pm</TimeSlot>
          <TimeSlot>3:00 pm</TimeSlot>
          <TimeSlot>3:30 pm</TimeSlot>
          <TimeSlot>4:00 pm</TimeSlot>
          <TimeSlot>4:30 pm</TimeSlot>
          <TimeSlot>5:00 pm</TimeSlot>
          <TimeSlot>5:30 pm</TimeSlot>
          <TimeSlot>6:00 pm</TimeSlot>
        </div>
        <div>{slots}</div>
        <div>{slots}</div>
        <div>{slots}</div>
        <div>{slots}</div>
        <div>{slots}</div>
        <div>{slots}</div>
        <div>{slots}</div>
      </Container>
      <div style={{margin: "20px", textAlign: "right"}} onClick={this.handleClick}><Button>Next</Button></div>
      </div>
      );
  }
}

export default Calendar;