import React from 'react'
import { About, Education, Experience, Interests, Skills } from './ContentBody'

const Content = () => {
  return (
    <div className='container-fluid p-0'>
      <About />
      <hr className="m-0" />
      <Experience />
      <hr className="m-0" />
      <Education />
      <hr className="m-0" />
      <Skills />
      <hr className="m-0" />
      <Interests />
    </div>
  )
}

export default Content