/* eslint-disable jsx-a11y/img-redundant-alt */
import "./Card.css"
import React, { Component } from 'react'

import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom"
class Card  extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isloading: true,
          data: null,
        };
      }
    
      componentDidMount() {
        
        setTimeout(() => {
          this.setState({
            isloading: false
           
          });
        }, 2000);
      }
    
    render(){
        const { isloading} = this.state;
  return (
  
  <>{
    isloading ? 
    <div className="card-loading">
    <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton height={420} duration={2} />
    </SkeletonTheme>
    </div>
    
        :
        
    <article className="card">
  
  <img
    className="card__background"
    src={this.props.imgsrc}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    
/>
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">{this.props.title}</h2>
      <p className="card__description">
        {this.props.description}
      </p>
    </div>
    <div className="button_distance">
    <a  href ={this.props.view} target="blank" className="card__view">View</a>
    <NavLink  to ={this.props.source} className="card__source">Source</NavLink>
    </div>
  </div>
</article>}</>
  )
    
}
}

export default Card