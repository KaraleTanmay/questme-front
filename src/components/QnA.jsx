import React, { useState } from 'react'
import Inputs from './factory components/Inputs'
import axios from 'axios'

export default function QnA(props) {

    const [url, setUrl] = useState(false)
    const [question, setQuestion] = useState(false)
    const [error, setError] = useState(false)
    const [res, setRes] = useState("your answer will apper here")



    const handleSubmit = async () => {
        if (url.startsWith("https://www.youtube.com")) {
            setError(false)
            setRes("please wait...")
            try {
                const resp = await axios({
                    method: "POST",
                    url: "http://127.0.0.1:8000/convert/qna",
                    data: {
                        url, question
                    }
                })
                console.log(resp)
                setRes(resp.data.answer)

            } catch (error) {
                if (error.code === "ERR_BAD_REQUEST") {
                    setRes("please request the qna system for this video")
                }
            }
        }
        else {
            setError(true)

        }

    }

    return (
        <div className='w-full h-[87vh]'>
            <div className='w-[80%] mx-auto flex flex-col justify-center items-center h-full'>
                <div className='flex w-full justify-start items-center text-or'>
                    <span className='cursor-pointer border-b-2 border-or p-1' onClick={() => props.setpage(true)}>
                        go to QnA page
                    </span>
                </div>
                <div className='w-full h-[80%] flex flex-col justify-center items-center gap-y-4'>
                    <div className='w-[50%]'>
                        <Inputs type="text" placeholder={"Enter link of your youtube video"} set={setUrl} />
                    </div>
                    <div className='w-[50%]'>
                        <Inputs type="text" placeholder={"describe the content"} set={setQuestion} />
                    </div>
                    <div className=' py-2 px-4 bg-or text-white font-[500] rounded-lg cursor-pointer ' onClick={handleSubmit}>
                        Ask
                    </div>
                    {
                        error && <div >
                            please enter valid url
                        </div>

                    }
                    <div className='border-2 rounded-md w-full flex justify-center items-center text-center p-4'>
                        {res}
                    </div>
                </div>
            </div>
        </div>
    )
}
