import { useState } from 'react'
import CallOptions from '../components/CallOptions'
import InitButtons from '../components/InitButtons'
import InputBox from '../components/InputBox'
import MessageBox from '../components/MessageBox'

export default function Home() {

  const [ address, setAddress ] = useState()


  const handleAddressInput =(e) => {
    setAddress(e.target.value)
    console.log(address)

  }
  
  return (
    <div className='flex flex-col gap-10 items-center p-10 h-screen w-screen'>
      <InputBox handleChange={handleAddressInput} />
      <InitButtons value={address} />
      <span className='text-xl font-bold '>Call Options</span>
      <CallOptions />
      <MessageBox />
    </div>
  )
}
