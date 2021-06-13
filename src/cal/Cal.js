import React from 'react'
import {useState} from 'react'
import "./cal.css"
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>



const Cal = () => {
    const [input1, setInput1] = useState()
    const [input2, setInput2] = useState()
    const [res, setRes] = useState()
   
    const text1 =(e)=>{
        setInput1(e.target.value)
       

    }
    const text2 =(e)=>{
        setInput2(e.target.value)
       

    }
   
       
  
     const subtract =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const minus=x-y
        setRes(minus)
    }
        
    const multiply =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const cross=x*y
        setRes(cross)

       
    }
    const divide =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const div=x/y
        setRes(div)
       
    }
    const remainder =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const rem=x%y
        setRes(rem)
       
    }
    
    

    return (
        <div>
            
                 <div className="container">
              <input type="number" placeholder="Enter Number!" onChange={text1}/>
                  </div>
                      
                    <button >*</button>
                      <div className="container">
                   <input type="number" placeholder="Enter Number!" onChange={text2}/>
                 
                      </div>
              
                 <button className="button" onClick={multiply}>=</button> <p>{res}</p>
             
          
      
            
            
        </div>
    )
}

export default Cal
