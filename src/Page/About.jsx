import React from 'react'

import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'


const About = () => {
  const items = [
    {img:icon1, heading: 'For Individuals'},
    {img:icon2, heading: 'For Small Team'},
    {img:icon3, heading: 'For Organization'},

  ]
  return (
    <div className='w-screen py-20 bg-white'>
        <div className='m-auto md:container'>
            <div className='text-center'>
                <p className='font-semibold text-emerald-600'>Ideal solutions for you</p>
                <h1>Go beyond ultimate features</h1>
            </div>
            <br />
            <div className='md:flex md:justify-evenly'>
              {
                  items.map((item,index)=> (
                    <div key={index}>
                      <div className='mb-3 md:flex'>
                      <div className='flex justify-center h-10 md:flex-initial'>
                        <img src={item.img} alt="item" />
                      </div>
                      <div className='text-center md:ml-6 md:text-start'>
                        <h1 className='font-semibold text-md'>{item.heading}</h1>
                        <p>Get your info test delivered at <br />
                          home collect a sample from the <br />
                          your progress tests.
                        </p>
                      </div>
                    </div>
                    </div>
                  ))
              }
            </div>
        </div>
    </div>
  )
}

export default About