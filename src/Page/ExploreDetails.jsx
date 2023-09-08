import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import video from '../assets/video.png'

const ExploreDetails = () => {
  return (
    <div>
      <div className="container p-2 m-auto">
        <div className='text-center'>
            <h1 className='text-2xl font-semibold'>See what our customer say about us</h1>
            <br />
            <p className='text-blue-950'>
              Every email, web page,and  social media post makes an impression on your <br />
              customers,With our software you can be confident it`s impression.
            </p>
            <br />
           <div className='flex items-center justify-center'>
           <button className='text-blue-500 '>Explore Details</button>
            <span className='ml-2 text-blue-500'><AiOutlineRight/></span>
           </div>
           <img src={video} alt="video" />
        </div>
      </div>
    </div>
  )
}

export default ExploreDetails