import React, { Component } from 'react';
import { OTSubscriber } from 'opentok-react';

export default class Subscriber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  onError = (err) => {
    this.setState({ error: `Failed to subscribe: ${err.message}` });
  }

  render() {
    return (
      <div>
        {this.state.error ? <div>{this.state.error}</div> : null}
        <OTSubscriber
          session={this.props.session}
          stream={this.props.stream}
          properties={{
            subscribeToAudio: this.state.audio,
						subscribeToVideo: this.state.video,
						width: 400, 
						height:400
          }}
          onError={this.onError}
        />
      </div>
    );
  }
}
