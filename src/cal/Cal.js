import React from 'react'
import {useState}from 'react'
const Cal = () => {
    const [input1, setInput1] = useState(null)
    const [input2, setInput2] = useState(null)
    const text1 =(e)=>{
        setInput1(e.target.value)

    }
    const text2 =(e)=>{
        setInput2(e.target.value)

    }
    return (
        <div>
            <div className="parent">
                <input type="text" onChange={text1} />
                <input type="text" onChange={text2} />
                
                
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
        </div>
    )
}

export default Cal
