import React from 'react'
import {useState} from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
const Cal = () => {
    const [input1, setInput1] = useState()
    const [input2, setInput2] = useState()
    const [input3, setInput3] = useState()
    const [res, setRes] = useState()
   
    const text1 =(e)=>{
        setInput1(e.target.value)
       

    }
    const text2 =(e)=>{
        setInput2(e.target.value)
       

    }
    const text3 =(e)=>{
      setInput3(e.target.value)
     

  }
    const add =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
        const z=Number(input3)
       const addition=(input1 * (input2 * 0.01))/input3;
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
                <input  type="number" onChange={text3} />
                 <button onClick={add}>=</button> <p>{res}</p>
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
            <form >
        <label style={{
                    width:'300px'}}>Blog title:</label>
        <input 
          type="text" 
          required 
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Robin">Robin</option>
          <option value="Shenoy">Shenoy</option>
        </select>
       {!isPending?<button>Add Blog</button>:<button>Adding Blog</button>} 
      </form>
        </div>
    )
}

export default Cal
