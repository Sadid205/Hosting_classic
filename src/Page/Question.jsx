import React, { useReducer } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const Question = () => {

  const initialState = {
    one:false,
    two:false,
    three:false,
    four:false,
    five:false
  }

  const reducer = (state,action) => {
      switch (action.type) {
        case 'one':
        return {...state,one:action.value};
        case 'two':
          return {...state,two:action.value}
        case 'three':
          return {...state, three:action.value}
          case 'four':
            return {...state,four:action.value}
          case 'five':
            return {...state,five:action.value}
      }
      
  }

  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <div className='p-2 m-auto md:container'>
        <div className='text-center'>
            <h4 className=' text-emerald-400'>Get your question answer</h4>
            <br />
            <h1 className='text-lg font-semibold'>Frequently asked question</h1>
        </div>
        <br />
        <br />
          <div className='flex justify-between'>
              <div className={`flex justify-start py-2`}>
                  <h1 className='font-semibold'>01.Which domain should i purchase?</h1>
              </div>
              <div className='relative'>
              <span onClick={()=> dispatch({
                type: 'one',
                value: !state['one']
              })} className='absolute right-0 ml-2 hover:cursor-pointer top-1'><AiOutlinePlus/></span>
              <p className='px-4'>We make it easy to move to CometNine.Simply contact us and we`ll</p>
               <p className={`px-4 ${state.one ? 'show' : 'hidden'}`}>
                  move your hosting account from any other provider, regardless of <br />
                  the control panel.If at anytime your website is down for more than <br />
                  0.1% result with proper investigation experiments.
                </p>
              </div>
          </div>
          <br />
          <hr  className='h-1 bg-gray-400'/>
          <div className='flex justify-between'>
              <div className='flex justify-start py-2'>
                  <h1 className='font-semibold'>02.What are some tips when choosing a name?</h1>
              </div>
              <div className='relative'>
              <span  onClick={()=> dispatch({
                type:'two',
                value: !state['two']
               })} className='absolute right-0 ml-2 hover:cursor-pointer top-1'><AiOutlinePlus/></span>
              <p className='px-4'>We make it easy to move to CometNine.Simply contact us and we`ll</p>
               <p className={`px-4 ${state.two ? 'show' : 'hidden'}`}>
                  move your hosting account from any other provider, regardless of <br />
                  the control panel.If at anytime your website is down for more than <br />
                  0.1% result with proper investigation experiments.
                </p>
              </div>
          </div>
          <br />
          <hr  className='h-1 bg-gray-400'/>
          <div className='flex justify-between'>
              <div className='flex justify-start py-2'>
                  <h1 className='font-semibold'>03.What if I need help choosing the right domain?</h1>
              </div>
              <div className='relative'>
              <span onClick={()=> dispatch({
                type:'three',
                value: !state['three']
              })} className='absolute right-0 ml-2 hover:cursor-pointer top-1'><AiOutlinePlus/></span>
              <p className='px-4'>We make it easy to move to CometNine.Simply contact us and we`ll</p>
               <p className={`px-4 ${state.three ? 'show' : 'hidden'}`}>
                  move your hosting account from any other provider, regardless of <br />
                  the control panel.If at anytime your website is down for more than <br />
                  0.1% result with proper investigation experiments.
                </p>
              </div>
          </div>
          <br />
          <hr  className='h-1 bg-gray-400'/>
          <div className='flex justify-between'>
              <div className='flex justify-start py-2'>
                  <h1 className='font-semibold'>04.Can I upgrade or downgrade my web hosting <br /> subscription system?</h1>
              </div>
              <div className='relative'>
              <span onClick={()=> dispatch({
                type:'four',
                value: !state['four']
              })} className='absolute right-0 ml-2 hover:cursor-pointer top-1'><AiOutlinePlus/></span>
              <p className='px-4'>We make it easy to move to CometNine.Simply contact us and we`ll</p>
               <p className={`px-4 ${state.four ? 'show' : 'hidden'}`}>
                  move your hosting account from any other provider, regardless of <br />
                  the control panel.If at anytime your website is down for more than <br />
                  0.1% result with proper investigation experiments.
                </p>
              </div>
          </div>
          <br />
          <hr  className='h-1 bg-gray-400'/>
          <div className='flex justify-between'>
              <div className='flex justify-start py-2'>
                  <h1 className='font-semibold'>05.Learn from community on Brandwagon?</h1>
              </div>
              <div className='relative'>
              <span onClick={()=>dispatch({
                type:'five',
                value: !state['five']
              })} className='absolute right-0 ml-2 hover:cursor-pointer top-1'><AiOutlinePlus/></span>
              <p className='px-4'>We make it easy to move to CometNine.Simply contact us and we`ll</p>
               <p className={`px-4 ${state.five ? 'show' : 'hidden'}`}>
                  move your hosting account from any other provider, regardless of <br />
                  the control panel.If at anytime your website is down for more than <br />
                  0.1% result with proper investigation experiments.
                </p>
              </div>
          </div>
          <br />
          <hr  className='h-1 bg-gray-400'/>
          <br />
          <div className='text-center'> 
              <button className='px-3 py-2 font-semibold text-gray-500 bg-gray-200 rounded-md'>Still Question? Contact us</button>
          </div>
      </div>
    </div>
  )
}

export default Question