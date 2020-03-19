import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import '../App.css';



class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Slide bottom>
        <div className='project'>
            <a href={this.props.url}>
                <img src={this.props.imageSrc} alt={this.props.title}></img>
             
            </a>
            <div className = 'project-text'>
                <h1>{this.props.title}</h1>
                <span>{this.props.service}</span>
            </div>
        </div> 
            </Slide>);
    }
}
 
export default Project;