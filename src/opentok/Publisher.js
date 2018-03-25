import React, { Component } from 'react';
import { OTPublisher } from 'opentok-react';

export default class Publisher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: true,
      video: true,
      videoSource: 'camera'
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  setVideoSource = (videoSource) => {
    this.setState({ videoSource });
  }

  onError = (err) => {
    this.setState({ error: `Failed to publish: ${err.message}` });
  }

  render() {
    return (
      <div>
        {this.state.error ? <div>{this.state.error}</div> : null}
        <OTPublisher
          session={this.props.session}
          properties={{
            publishAudio: this.state.audio,
            publishVideo: this.state.video,
            videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined
          }}
          onError={this.onError}
        />
        
      </div>
    );
  }
}
