import React from 'react'

const InputBox = ( {handleChange} ) => {
  return (
    <>
        <input className='text-xl font-medium p-2 border-none bg-slate-200 rounded-lg outline-none' placeholder='Enter wallet address' onChange={handleChange} />
    </>
  )
}

export default InputBox