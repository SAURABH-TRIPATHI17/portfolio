import React,{ Component } from "react";
import PROJECTS from "./data/projects";

class Project extends Component{
    render(){
        //console.log(this.props);
        const {title , image, description, link } = this.props.project;

        return(
            <div style={{display:'inline-block', width:'30%', margin:'1%'}}>
                <h3> {title}  </h3>
                <img src={image} alt='project 1 image' style={{width:'100%', height:'100%'}}></img>
                <p>{description}</p>
                <a href={link}>{link}</a>
                </div>
        )
    }
}

class Projects extends Component{
    render()
    {
        return (
            <div>
                <h1>Highlighted Project</h1>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Projects;