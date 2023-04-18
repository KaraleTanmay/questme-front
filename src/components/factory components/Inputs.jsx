import React, { useRef } from 'react'

export default function Inputs(props) {

    const inputRef = useRef()

    const handleChange = () => {
        props.set(inputRef.current.value)
    }

    return (
        <div>
            <input className='p-2 focus:outline-none rounded-md w-full border-[2px] border-sec' type={props.type || "text"}
                placeholder={props.placeholder || 'Enter Topic'} ref={inputRef} onChange={handleChange} />
        </div>
    )
}
