import React,{useEffect,useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link,Navigate } from 'react-router-dom';
import { register } from '../store/action/register_action';
import { connect } from 'react-redux';

const registration = (props) => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    //const [confirmpassword,setConfirmPassword]=useState('');
    //const [loading,setLoading]=useState(false);
    const [status,setStatus]=useState('');
    //const [error,setError]=useState('');
    useEffect(() => {
        setStatus(props.status)
        //console.log('fd',status);
    });
    if(status === 'Register successfull'){
        return <Navigate to='/signin'/>
    }
    // const check=()=>{
    //     setStatus(props.status)
    //     console.log("sdfsdf",status);
    // }
    
    return (
        <div className="App">
            <Header/>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-6 col-12 mx-auto" style={{marginTop:"3rem"}}>
                        <h1 style={{textAlign:"center"}}>Registration</h1>
                        
                            <div className="form-group">
                                <br />
                                <label>Name:</label>
                                <br />
                                <input type="name" required placeholder="Enter your name" className="form-control" id="name" onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <br />
                                <label>Email address:</label>
                                <br />
                                <input type="email" required placeholder="Enter your email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <br />
                                <label >Password:</label>
                                <br />
                                <input type="password" required placeholder="Enter your password" className="form-control" id="pwd"onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <br />
                            <button className="btn btn-dark" onClick={()=>{props.register(name,email,password);}} >Register</button>
                            <br />
                            <br />
                            {/* onClick={name && email && password ? ()=>props.register(name,email,password):null} */}
                            {status === 'Register successfull' ?<div className="alert alert-success" role="alert">{status}</div>:status === 'Failed to register'?
                            <div className="alert alert-danger" role="alert">{status}</div>:null}
                            <Link to="/signin">
                            <p>Have an account? Login</p>
                            </Link>
                            
                    
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
const mapStateToProps=(state)=>({
    registerUser:state.registerUser.login_user,
    loading:state.registerUser.loading,
    status:state.registerUser.status2
})
const mapDispatchToProps=(dispatch)=>({
    register:(n,e,p)=>dispatch(register(n,e,p))
})

export default connect(mapStateToProps,mapDispatchToProps)(registration);