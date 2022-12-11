import React from 'react'
import { About, Education, Experience } from './ContentBody'

const Content = () => {
  return (
    <div className='container-fluid p-0'>
      <About />
      <hr className="m-0" />
      <Experience />
      <hr className="m-0" />
      <Education />
    </div>
  )
}

export default Content