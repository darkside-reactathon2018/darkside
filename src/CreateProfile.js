import React, { Component } from "react";
import styled from "styled-components";
import "./CreateProfile.css";
import { Button } from "./Home";
import Calendar from "./Calendar";
import RadioButtons from "./RadioButtons";

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const Container = styled.div`
  margin: 50px;
`;

class CreateProfile extends Component {
  state = {
    isCalendar: false
  };

  renderQuestion(labelText, id, placeholder) {
    return (
      <div>
        <label for={id}>{labelText}</label>
        <br />
        <input type="text" id={id} name={id} placeholder={placeholder} />
      </div>
    );
  }

  handleClick = event => {
    this.setState({
      isCalendar: true
    });
  };

  render() {
 
      return (
        <Container>
          {!this.state.isCalendar && <div>
            <h1>Create Profile</h1>
            <form>
              {this.renderQuestion("Your Name", "fname", "What is your name?")}
              {this.renderQuestion(
                "Occupation",
                "work",
                "What do you do for work?"
              )}
              {this.renderQuestion(
                "Your Age",
                "hobbies",
                "What do you do for fun?"
              )}
              {this.renderQuestion(
                "Your partner's age",
                "hobbies",
                "What do you do for fun?"
              )}
              {this.renderQuestion(
                "Your Gender",
                "gender",
                ""
              )}
              {this.renderQuestion(
                "Your Partner's Gender",
                "gender",
                ""
              )}
              <div>
                <label>Tell as about yourself</label>
                <br />
                <textarea type="text" style={{fontSize: "18px", width: "300px", height: "150px"}} row="50" column="100" />
              </div>
            </form>
            <QuestionContainer>
              <span>Would you ever correct your partner for seriously misusing or mispronouncing a word?</span>
              <RadioButtons/>
            </QuestionContainer>
            <QuestionContainer>
              <span>Is it okay to answer your cell phone while out with a friend or on a date? </span>
              <RadioButtons/>
            </QuestionContainer>
            <QuestionContainer>
              <span>Breast implants — cool or pathetic?</span>
              <RadioButtons/>
            </QuestionContainer>
            <QuestionContainer>
              <span>Imagine you have a partner who is able to provide financially for you and any children. Would you consider taking a stay-at-home role?</span>
              <RadioButtons/>
            </QuestionContainer>
            <QuestionContainer>
              <span>Would you consider having an open relationship (i.e., one where you can see other people)?</span>
              <RadioButtons/>
            </QuestionContainer>
            <QuestionContainer>
              <span>Would you date someone who kept a gun in the house?</span>
              <RadioButtons/>
            </QuestionContainer>
            <QuestionContainer>
              <span>How long after you’ve started dating someone do you follow them on social media?</span>
              <RadioButtons/>
            </QuestionContainer>
            <QuestionContainer>
              <span>Do you feel obilgated to help your fellow human beings?</span>
              <RadioButtons/>
            </QuestionContainer>
            <QuestionContainer>
              <span>Are you going to run away as soon as it is commitment time?</span>
              <RadioButtons/>
            </QuestionContainer>
            <QuestionContainer>
              <span>Are you capable of being faithful even if your lover is away for a long period of time?</span>
              <RadioButtons/>
            </QuestionContainer>
            <div style={{ textAlign: "right" }} onClick={this.handleClick}>
              <Button>Next</Button>
            </div>
          </div>}
          {this.state.isCalendar && <Calendar />}
        </Container>
      );
    }
}

export default CreateProfile;