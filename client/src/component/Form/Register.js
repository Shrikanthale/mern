import React , {useState} from 'react'
import axios from 'axios'

function Register() {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [phoneNumber , setPhone] = useState("");

    const  [newValue , setValue] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        const newVal ={name:name , email:email , phoneNumber:phoneNumber}

        setValue([...newValue , newVal])
        // console.log(newValue)
        axios.post('http://localhost:8080/register',newValue)
    }
  return (
    <div className='form'>
        <h3 className='text' >Register</h3>
        <form action="" onSubmit={submitForm} className="box" >
            <div className='feild'>
               <label htmlFor="name">Name</label><br></br>
               <input type="text" className='input-feild' name="name" id="name" autocomplete="off" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='feild'>
               <label htmlFor="email">Email</label><br></br>
               <input type="text" className='input-feild' name="email" id="email" autocomplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='feild'>
               <label htmlFor="phoneNumber">phoneNumber</label><br></br>
               <input type="number" className='input-feild' name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <div>
                <button type="submit" className="btn" >Register</button>
            </div>
        </form>
        <div>
            {
                newValue.map((curEle)=>{
                    return(
                        <div className="screenData">
                            <p>{curEle.name}</p> 
                            <p>{curEle.email}</p> 
                            <p>{curEle.phoneNumber} </p>  
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Register