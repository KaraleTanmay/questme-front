import React from 'react'

export default function Card(props) {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-slate-300 rounded-lg max-w-[300px]'>
            <div className='h-[40%] flex justify-center items-center'>
                <div className='w-[30px] h-[30px] bg-or rounded-[50%] flex justify-center items-center p-1 font-[600] text-lg text-white'>

                    {props.no || "1"}
                </div>
            </div>
            <div className='text-center h-[60%] p-2 text-md flex justify-center items-center'>
                {props.text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorem sed iusto eius assumenda illo voluptates repudiandae dignissimos non repellendus."}

            </div>
        </div>
    )
}
