// Code YouTubeDebugger Component Here
import React, {Component} from 'react'
export default class YouTubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
    }
  }
  render(){
    return(
      <button class='bitrate'></button>
      <button class='resolution'></button>
    )
  }
}
