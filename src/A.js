import React, { Component } from 'react';
import B from './B';

export default class A extends Component {
    state = {
        msg: "",
    }

    handleReturn = (childData) => {
           this.setState ({msg : childData})
    }


  render() {

    const {msg} = this.state;

    return (
      <div>
        <h1> {msg}</h1>
        <B parentCallback = {this.handleReturn}/>

      </div>
    );
  }
}
