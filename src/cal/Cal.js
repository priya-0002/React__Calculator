import React from 'react'
import {useState} from 'react'
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
    const add =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const addition=x+y
       setRes(addition)
       
       

     

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
    const test= {
       
        "cars":[ "Ford", "BMW", "Fiat" ]
      };
      console.log(test)

    const numbers =[0,1,2,3,4,5,6,7,8,9]
        
        console.log(numbers)

    

    return (
        <div>
            
            <div className="parent">
                <input type="number" onChange={text1} />
                <button>+</button>
                <input  type="number" onChange={text2} />
                 <button onClick={add}>=</button> <p>{res}</p>
                
              

        
               
                <br />

                <input type="number" onChange={text1} />
                <button>-</button>
                <input  type="number" onChange={text2} />
                <button onClick={subtract}>=</button> <p>{res}</p>
               
               

                <br />

                <input type="number" onChange={text1} />
                <button>*</button>
                <input  type="number" onChange={text2} />
                <button onClick={multiply}>=</button> <p>{res}</p>
              
               
               <br />

               <input type="number" onChange={text1} />
                <button>/</button>
                <input  type="number" onChange={text2} />
                <button onClick={divide}>=</button>  <p>{res}</p>
              

                <br />

                <input type="number" onChange={text1} />
                <button>%</button>
                <input  type="number" onChange={text2} />
                <button onClick={ remainder}>=</button>  <p>{res}</p>
                
               
               
            </div>
            <div>
                <h1>{test.cars[0]}</h1>
                <ul>
      {numbers.map((number) =>
      <div>
        <button key={number}>{number} </button>
                   
     </div>
      )}
    </ul>
             
            </div>  
        </div>
    )
}

export default Cal
