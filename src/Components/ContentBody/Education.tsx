import React from 'react'

const Education = () => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Jinan University of Lebanon</h3>
            <div className="subheading mb-3">Bachelor of Science</div>
            <div>Computer Science - 3rd year now</div>
            <p>GPA: Not Done yet</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Fall 2020 - Present</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Many Certifications</h3>
            <div className="subheading mb-3">IT Field</div>
            <ul>
              <li>Google IT automation with Python - Coursera</li>
              <li>Meta Front-End Developer Professional-Certificates - Coursera</li>
              <li>and a lot of courses from youtube, freeCodeCamp, Udemy, and online reports and blogs</li>
            </ul>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">Fall 2010 - Spring 2017</span></div>
        </div>
      </div>
    </section>
  )
}

export default Education