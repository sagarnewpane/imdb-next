'use client'
import {useEffect} from 'react'

function error({error,reset}) {
    useEffect(()=>{
        console.log(error);
    },[error]);

  return (
    <div className='text-center m-y-10'>
        <h1>Something went wrong.</h1>
        <button className='hover:text-amber-600' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default error