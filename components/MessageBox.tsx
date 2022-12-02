import React, {useState} from 'react'

const MessageBox = () => {

    const [message, setMessage] = useState()

    const sendMessage = () => {
        console.log(message)
    }

    return (
        <div className='flex flex-col justify-between p-5 border border-slate-500'>
            <div className='flex flex-col justify-between gap-5 min-w-[500px]'>
                <div className='p-2 min-w-[200px] max-w-[300px] rounded-md bg-green-200 border-none outline-none flex flex-col justify-between self-start'>
                    <span className='self-start max-w-full break-words'>
                        Message
                    </span>
                    <span className='self-end'>
                        12:12
                    </span>
                </div>
                <div className='p-2 min-w-[200px] max-w-[300px] rounded-md bg-green-200 border-none outline-none flex flex-col justify-between self-end'>
                    <span className='self-start max-w-full break-words'>
                        Message
                    </span>
                    <span className='self-end'>
                        12:12
                    </span>
                </div>
            </div>
            <div className='mt-5 flex justify-between w-full rounded-lg'>
                <input className='flex-1 text-xl font-medium p-2 border-none bg-slate-100 outline-none' placeholder='Enter a message' onChange={(e) => setMessage(e.target.value)} />
                <button type='submit' onClick={sendMessage} className='px-3 max-w-[25%] bg-green-400' >Send</button>
            </div>
        </div>
    )
}

export default MessageBox