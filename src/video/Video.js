import React, { Component } from "react";
import Publisher from "./Publisher";
import Subscriber from "./Subscriber";
import Timer from "./Timer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  OTSession,
  OTPublisher,
  OTStreams,
  OTSubscriber,
	preloadScript
} from "opentok-react";

export const Button = styled.span`
  background-color: var(--blue);
  color: #fff;
  font-size: 20px;
  border-radius: 15px;
  padding: 10px;

  &:hover {
    box-shadow: 0 2px 10px var(--pink);
    
  }
`;

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      connected: false,
      apiKey: "",
      sessionId: "",
      token: ""
    };

    this.subscriberProperties = {
      preferredFrameRate: 15,
      showControls: false
    };

    this.sessionEvents = {
      sessionDisconnected: event => {
        this.setState({ connected: false });
      },
      sessionConnected: event => {
        this.setState({ connected: true });
      }
    };
  }

  async componentDidMount() {
    let response = await fetch("https://darkside.abut27.hasura-app.io/");
    let data = await response.json();

    this.setState({
      apiKey: data.apiKey,
      sessionId: data.sessionId,
      token: data.token
    });
  }

  onError = err => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  };

  render() {
    return (
      (!this.state.apiKey && <div>empty</div>) || (
        <div
          style={{
            position: "relative",
            display: "flex",
						"justify-content": "center",
						"align-items": "center",
						"flex-direction": "column",
						marginTop: "3%"
          }}
        >
					<Timer />
          <OTSession
            apiKey={this.state.apiKey}
            sessionId={this.state.sessionId}
            token={this.state.token}
            eventHandlers={this.sessionEvents}
            onError={this.onError}
          >
						
            <Publisher />
            <OTStreams>
              <Subscriber />
            </OTStreams>
          </OTSession>
					<Link to="/report" style={{ margin: "50px" }}><Button>Get me out of here!</Button></Link>
        </div>
      )
    );
  }
}

export default preloadScript(Video);
