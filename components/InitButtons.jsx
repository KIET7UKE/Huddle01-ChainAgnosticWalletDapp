import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import React from 'react'
import { useDivergentClient, useRootStore } from '@0xvaibhav/divergent-client'

const InitButtons = ( value ) => {
  const client = useDivergentClient()
  const uid = useRootStore(state => state.user.uid)


    const startCall = () => {
        console.log(value)
    }

    const startMessage = () => {
        console.log(value)
    }

  return (
    <div className='flex gap-5 items-center justify-center'>
      {uid}
      <button className='p-3 bg-green-400 border-none outline-none rounded-lg' onClick={async() => await client.init("wallet")}>Login</button>
        <button className='p-3 bg-green-400 border-none outline-none rounded-lg' onClick={async() => await client.dial("0x72BAc77a1a8778dd54001fA2F30c939cA41a60B0")}>Start Call</button>
        <button className='p-3 bg-green-400 border-none outline-none rounded-lg' onClick={() => startMessage()}>Start Message</button>
    </div>
  )
}

export default InitButtons