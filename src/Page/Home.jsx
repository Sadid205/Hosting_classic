import React from 'react'
import sponser from '../assets/sponser.png'
import illustration from '../assets/illustration.png'

const Home = () => {
  return (
    <div className='w-screen bg-gray-100'>
       <div className='justify-between px-4 py-8 m-auto md:container md:flex'>
        {/* Left Side Div */}
            <div>
                <h1 className='text-4xl font-semibold text-blue-950 '>A Creative way to <br />
                  grow your Exciting <br />
                  Business ideas
                </h1>
                <br />
                <p className='text-blue-950'>
                  Get your tests delivered at let home collect sample from the <br />
                  victory of the managements that supplies best design system <br />
                  guidelines ever.
                </p>
                <div>
                  <div className='flex'>
                    <input className='p-2 outline-none' type="text" placeholder='Type your domain name' />
                    <button className='px-4 py-2 ml-2 font-semibold text-white bg-green-500 rounded-md bg'>Get Started</button>
                  </div>
                  <br />
                  <div>
                    <img src={sponser} alt="sponser" />
                  </div>
                </div>
            </div>
            {/* right side div */}
            <div className='w-auto '>
              <img src={illustration} alt="illustration" />
            </div>
       </div>
    </div>
  )
}

export default Home