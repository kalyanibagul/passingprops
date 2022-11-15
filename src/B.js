import React, { Component } from 'react'

export default class B extends Component {
    onTrigger = () => {
        this.props.parentCallback(" Welcome A component");
    };
  render() {
    return (
      <div>
      <br></br>
      <button onClick={this.onTrigger}> Click Me</button>  
      </div>
    )
  }
}
