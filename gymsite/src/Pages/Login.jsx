import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const submitformvalue = async (e) => {
        e.preventDefault();
        try {
            
            const userdata = {
                email: username,
                password: password
            }
        
            const response = await fetch('http://localhost:8000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userdata)
            })
            const data = await response.json()
            console.log(data);
            if (data.success) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('userId', JSON.stringify(data.data._id))
                navigate('/')
                alert('Login successful')
            }
                else{
                    alert(data.message)
                }

        } catch (error) {
               console.log('Error login ',error)
        }
        
    
    }


    return (
        <>
            <Navbar></Navbar>
            <br /><br /><br /><br /><br /><br />
            <div className='w-100 h-100 d-flex justify-content-center align-items-center ' style={{marginBottom: "140px"}}>
                <h1></h1>
                <form className='w-25 border p-5' onSubmit={submitformvalue}>
                    <h1 className='mb-5 fw-bold ' style={{ color: "#2eb4ac"}}>LOGIN</h1>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={username} onChange={(e) => setUsername(e.target.value)} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-light" style={{backgroundColor: "#2eb4ac"}}>Submit</button>
                </form>
            </div>

<Footer/>

        </>
    )
}

export default Login
