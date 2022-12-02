import React from 'react'
import { useDivergentClient, useRootStore } from '@0xvaibhav/divergent-client'

const CallOptions = () => {
    const callerSignal = useRootStore(state => state.callerSignal)
    const client = useDivergentClient()

    const accept = () => {
        console.log("Call Accepted")
    }

    const decline = () => {
        console.log("Call declined")
    }

    const endCall = () => {
        console.log("Call Ended")
    }

  return (
    <div className='flex gap-5 justify-center items-center'>
        {callerSignal && <button className='rounded-lg p-3 bg-green-400' onClick={() => client.answer()}>Accept</button>}
        <button className='rounded-lg p-3 bg-red-400' onClick={decline}>Decline</button>
        <button className='rounded-lg p-3 bg-red-400' onClick={endCall}>End</button>
    </div>
  )
}

export default CallOptions