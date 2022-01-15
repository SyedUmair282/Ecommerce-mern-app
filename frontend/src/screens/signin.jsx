import React,{useEffect,useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link,Navigate } from 'react-router-dom';
import { login } from '../store/action/login_action';
import { connect } from 'react-redux';

const signin = (props) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const [status,setStatus]=useState('');

    
    
    useEffect(() => {
        setStatus(props.status)
    });
    const check=(e,p)=>{
        if(email && password){
            props.login(e,p)
        }
        else{
            alert('Please fill all fields')
        }

    }
    if(status === "Login successfull"){
     
        return <Navigate to='/'/>
    }

    return (
        <div className="App">
            <Header/>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-6 col-12 mx-auto" style={{marginTop:"3rem"}}>
                        <h1 style={{textAlign:"center"}}>Sign In</h1>
                        
                            <div className="form-group">
                                <br />
                                <label >Email address:</label>
                                <br />
                                <input type="email"  placeholder="Enter your email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <br />
                                <label>Password:</label>
                                <br />
                                <input type="password"  placeholder="Enter your password" className="form-control" id="pwd" onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <br />
                            
                            <button type="submit"  className="btn btn-dark" onClick={()=>check(email,password)}>Sign in </button>
                            <br />
                            <br />
                            {status === 'Login successfull' ?<div className="alert alert-success" role="alert">{status}</div>:status === 'Failed to login'?
                            <div className="alert alert-danger" role="alert">{status}</div>:null}
                            <Link to="/registration">
                            <h6>New customer? Register</h6>
                            </Link>
                            
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
const mapStateToProps=(state)=>({
    user:state.loginUser.login_user,
    loading:state.loginUser.loading,
    status:state.loginUser.status
});
const mapDispatchToProps=(dispatch)=>({
    login:(e,p)=>dispatch(login(e,p))
});


export default connect(mapStateToProps,mapDispatchToProps)(signin);
