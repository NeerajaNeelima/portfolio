import "./Cardlist.css"
import React from 'react'
import Card from './Card'
import CardData from './Carddata'
const Cardlist = () => {

  const htmlcssjsProjects = CardData.filter((project) => {
    let projectType;

  if (project.Technology.includes('HTML') && project.Technology.includes('CSS') && project.Technology.includes('JS')) {
    projectType = 'HTML, CSS, and JS';}
    return projectType
  });


  const djangoProjects = CardData.filter((project) => {
    return project.Technology.includes('Django');
  });

  const mernProjects = CardData.filter((project) => {
    return project.Technology.includes('MERN');
  });    
  return (
    <div className="container">
      <h2>HTML,CSS & JS Projects</h2>
      <div className="container-card-list">
      <div className="list__cards">
      
      <div className="projects">
        
        {htmlcssjsProjects.map((project, index) => (
          <Card
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            description={project.description}
            view={project.view}
            source={project.source}
          />
        ))}
        </div> 
      </div>
    </div>
    
    <h2>Django Projects</h2>
       <div className="container-card-list">
       
      <div className="projects">
        
        {djangoProjects.map((project, index) => (
          <Card
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            description={project.description}
            view={project.view}
            source={project.source}
          />
        ))}
        </div> 
       </div>
        
        <h2>MERN Projects</h2>
          <div className="container-card-list">
         
        <div className="projects">
        
        {mernProjects.map((project, index) => (
          <Card
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            description={project.description}
            view={project.view}
            source={project.source}
          />
        ))} 
        </div>
          </div>
        
        
  

    {/* {CardData.map((val,ind)=>
         {
            return(
                <Card 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                description={val.description}
                view={val.view}
                source={val.source}
                />
            )
         }
        )}   */}  
    </div>
  )
}

export default Cardlist