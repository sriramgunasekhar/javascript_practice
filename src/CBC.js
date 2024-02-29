import React, { Component } from 'react'

export default class CBC extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name:" Sekhar"}
  }
    
  render() {
    return (
      <div>
        <h2>This is Guna{this.state.name}</h2>
      </div>
    )
  }
}
