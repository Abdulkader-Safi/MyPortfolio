import React from 'react'

const Experience = () => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Full stack Web Developer</h3>
            <div className="subheading mb-3">Freelance</div>
            <p>Working Online as a freelancer in Web development field using ReactJS for front end and Laravel or ExpressJS for back end and MySQL or PostgerSQL for database</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Fall 2020 - Present</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Full stack Web Developer</h3>
            <div className="subheading mb-3">Internship</div>
            <p>Internship in Verazone as full stack web developer using reactJS in front end and laravel back end development connecting front and back end using APIs</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Fall 2022 - Present</span></div>
        </div>
      </div>
    </section>
  )
}

export default Experience