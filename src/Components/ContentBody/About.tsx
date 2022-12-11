import React from 'react'

const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Abdulkader
          <span className="text-primary"> Safi</span>
        </h1>
        <div className="subheading mb-5">
          Lebanon North · (961) 76 499 386 ·
          <a href="mailto:safi.abdulkader@gmail.com">safi.abdulkader@gmail.com</a>
        </div>
        <p className="lead mb-5">Hi There I'm Abdulkader Safi. A Full Stack web developer having specialization in back end & front end development, I have 6+ years of experience in Web development, Lebanese lives in North Lebanon</p>
        <div className="social-icons">
          <a className="social-icon" href="https://www.linkedin.com/in/abdulkader-safi-9a6305192/"><i className="fab fa-linkedin-in"></i></a>
          <a className="social-icon" href="https://github.com/Abdulkader-Safi"><i className="fab fa-github"></i></a>
          <a className="social-icon" href="https://twitter.com/AbdulkaderSafi"><i className="fab fa-twitter"></i></a>
          {/* <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a> */}
        </div>
      </div>
    </section>
  )
}

export default About