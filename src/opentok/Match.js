import React, { Component } from 'react';
import Video from './opentok';

export default class Match extends Component {
	render() {
		return (
		<div style={{ display: "flex", "align-items": "flex-start"	}}>
			<Video />
		</div>
		);
	}
}
