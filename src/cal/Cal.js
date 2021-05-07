import React from 'react'
import {useState} from 'react'
const Cal = () => {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [res, setRes] = useState(0)
    const text1 =(e)=>{
        setInput1(e.target.value)
        console.log(typeof input1)

    }
    const text2 =(e)=>{
        setInput2(e.target.value)
        console.log(typeof input2)

    }
    const add =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const addition=x+y
        setRes(addition)

        console.log(res)

    }
    return (
        <div>
            <div className="parent">
                <input type="number" onChange={text1} />
                <input  type="number" onChange={text2} />
                
                
                <button onClick={add}>=</button>
              
            </div>
        </div>
    )
}

export default Cal
