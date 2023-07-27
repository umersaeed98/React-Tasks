


import React from 'react'
import ProjectBanner from './ProjectBanner/ProjectBanner'
import AboutProject from './AboutProject/AboutProject'
import AboutProjectImage from './AboutProjectImage/AboutProjectImage'
import LowerProjectsAbout from './LowerAboutProject/LowerProjectsAbout'
import ProjectsCards from './ProjectsCards/ProjectsCards'

const Project = () => {
  return (
    <div>
    <ProjectBanner/>
    <AboutProject/>
    <AboutProjectImage/>
    <LowerProjectsAbout/>
    <ProjectsCards/>
    </div>
  )
}

export default Project
