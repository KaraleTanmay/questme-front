import React, { useState } from 'react'
import Card from './factory components/Card'
import Inputs from './factory components/Inputs'
import axios from 'axios'

const steps = ["enter the url of any youtube video", "get notified after processing", "ask any question about the video"]

export default function GetStarted(props) {

    const [url, setUrl] = useState(false)
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [status, setStatus] = useState(false)

    const handleSubmit = async () => {
        if ((email.search("@") >= 0) && (url.startsWith("https://www.youtube.com"))) {
            setError(false)
            try {
                const res = await axios({
                    method: "POST",
                    url: "http://127.0.0.1:8000/convert",
                    data: {
                        email, url
                    }
                })
                if (res.status === 200) {
                    setStatus(true)
                }
            } catch (error) {
                setError(true)
                setStatus(false)
            }
        }
        else {
            setError(true)
            setStatus(false)
        }
    }

    return (
        <div className='w-full bg-pri p-4 h-[87vh] flex justify-center items-center'>

            <div className='w-[80%] m-auto flex flex-col justify-center items-center'>

                <div className='flex w-full justify-end items-center text-white'>
                    <span className='cursor-pointer border-b-2 border-white p-1' onClick={() => props.setpage(false)}>
                        go to QnA page
                    </span>
                </div>
                <div className='text-orli font-[500] text-lg'>Answer to all your questions is here</div>
                <div className='text-[80px] font-[600] text-white py-2'>Question Me</div>
                <div className='text-lg my-4 text-orli'>just three easy steps ..!</div>
                <div className='flex justify-between items-center w-[80%] gap-x-8'>
                    {
                        steps.map((ele, i) => {
                            return (
                                <div className='w-[250px] h-[100px]' key={i}>
                                    <Card no={i + 1} text={ele} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mt-8 gap-y-5 flex flex-col justify-center items-center w-full'>

                    <div className='w-[50%]'>
                        <Inputs type="text" placeholder={"Enter link of any youtube video"} set={setUrl} />
                    </div>
                    <div className='w-[50%]'>
                        <Inputs type="email" placeholder={"youremail@gmail.com"} set={setEmail} />
                    </div>
                    <div className=' py-2 px-4 bg-new text-white font-[500] rounded-lg cursor-pointer ' onClick={handleSubmit}>
                        Get Started
                    </div>
                    {
                        error && <div className='text-white'>
                            please fill valid inputs
                        </div>

                    }
                    {
                        status && <div className='text-white'>
                            request successfull !
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
