import "./Backgroundimg2.css"
import React, { Component } from 'react'


class Backgroundimg2 extends Component{
    render(){
  return (
    <div className="back-img">
        <div className="heading">
            <h1> {this.props.heading} </h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}

export default Backgroundimg2