// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
    constructor(){
        super()
        this.state={
            timesClicked:0
        }
    }
    clickAdder=()=>{
        let counter= this.state.timesClicked +1;
        this.setState({
            
            timesClicked:counter
        })
    }
    render() {
        return (
            <div>
            <button onClick={this.clickAdder}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
