import React, { Component } from 'react';
import Project from './project';
import Slide from 'react-reveal/Slide';
import data from '../yourdata';



class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        < Slide bottom >Work.</ Slide></h1>
        < Slide bottom  ><div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                             
                     ></Project>
                     
                ))}
        </div></Slide> 
        </div>  );
    }
}
 
export default Work;