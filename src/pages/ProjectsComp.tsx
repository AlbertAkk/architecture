import React from 'react'
import { projectsMocks } from '../mocks/projectsMocks'
import { Link } from 'react-router-dom'

const ProjectsComp = () => {
  return (
    <div className="allProjectsWrapper">
      <section id="allProjectsSection">
        <ul className="allProjects">
          {projectsMocks.map((project, index) => (
            <li key={index} className="allProjectsElement">
              <div className="allProjectsBgWrapper">
                <div
                  key={index}
                  className="allProjectsBackground"
                  style={{
                    backgroundImage: `url(${require(
                      `./../assets/${project.backgroundImage[0].image}`
                    )})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}
                >
                  <Link
                    to={'id/' + project.id.toString()}
                    className="allProjectsDescr"
                  >
                    <div className="allProjSubBlock">
                      <div className="allProjHeader">
                        <p className="allProjprojName">{project.name}</p>
                        <p className="allProjCity">{project.city}</p>
                      </div>
                      <p className="allProjText">
                        {project.backgroundImage[0].description
                          .split(' ')
                          .slice(0, 45)
                          .join(' ') + '...'}
                      </p>
                    </div>
                    <div className="allProjReadMore">Read more</div>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ProjectsComp
