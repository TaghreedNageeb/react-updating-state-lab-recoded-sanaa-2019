// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    constructor(){
        super()
        this.state={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }
    changeBitrate=()=>{
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    changeResolution=()=>{

        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    resolution:'720p' 
                }
            }
          
        })  
    }
    


    render() {
        return (
          <div>
         
           <label> {this.state.settings.bitrate}</label>
           <button className ="bitrate" onClick={this.changeBitrate}>Change Birates</button>   <br/>

           <label> {this.state.settings.video.resolution} </label>
           <button className ="resolution" onClick={this.changeResolution}>Change Resolution</button>

          </div>
        )
      }
    }
    export default YouTubeDebugger;