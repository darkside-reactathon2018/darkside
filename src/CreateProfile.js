import React, { Component } from "react";
import * as style from './CreateProfile.css';

class CreateProfile extends Component {
  state = {

  }

  renderQuestion(labelText, id, placeholder) {
    return (
      <div>
      <label for={id}>{labelText}</label>
      <br/>
      <input 
        type='text'
        id={id}
        name={id}
        placeholder={placeholder}
      />
      </div>
    );
  }

  render() {
    return(
      <div style={style}>
        <form>
          {
            this.renderQuestion('First Name', 'fname', 'First name')
          }
          {
            this.renderQuestion('Last Name', 'lname', 'Last name')
          }
          {
            this.renderQuestion('Describe yourself', 'describe', "Don't sound like a creep.")
          }
          {
            this.renderQuestion('Hobbies', 'hobbies', 'What do you do for fun?')
          }
          {
            this.renderQuestion('Profession', 'work', 'What do you do for money?')
          }
        </form>
      </div>
      );
  }
}

export default CreateProfile;