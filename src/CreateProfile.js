import React, { Component } from "react";
import * as style from './CreateProfile.css';
import { Button } from './Home';

class CreateProfile extends Component {
  state = {
    isCalendar: false
  }

  renderQuestion(labelText, id, placeholder) {
    return (
      <div className='question'>
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

    if (!this.state.isCalendar) {
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

          <Button>Next</Button>
        </div>
      );
    } else {

    }
  }
}

export default CreateProfile;