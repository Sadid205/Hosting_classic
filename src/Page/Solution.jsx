import React from 'react'

const Solution = () => {

    const items = [
        {title:'Cloud Hosting', price:'$0.63/mo'},
        {title:'Web Hosting', price:'$0.75/mo'},
        {title:'VPS Hosting', price:'$0.68/mo'},
        {title:'WordPress Hosting', price:'$0.72/mo'},
        {title:'Domains', price:'$0.75/mo'},
        {title:'Email Hosting', price:'$0.58/mo'},
        {title:'VPN Service', price:'$0.69/mo'},
        {title:'Image Cloud', price:'$0.75/mo'}
    ]

  return (
    <div className='bg-white'>
        <div className='m-auto md:container'>
            <br />
            <br />
            <div className='text-center'>
                <p className='font-semibold text-emerald-500'>Ideal solution for you</p>
                <h1 className='font-semibold'>Didn`t find what you were looking for ?</h1>
            </div>
            <div className='grid gap-4 md:grid-cols-4'>
                {items.map((item,index)=>(
                    <div className='px-10 py-12 text-center shadow-md' key={index}>
                        <h1 className='font-semibold'>{item.title}</h1>
                        <p className='text-blue-500'>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Solution