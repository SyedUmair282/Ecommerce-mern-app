import React,{useEffect,useState} from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../store/action/login_action';

const header = (props) => {
    const [user,setUser]=useState();
    const [check,setCheck]=useState(false);
    useEffect(() => {
        const user_data=JSON.parse(localStorage.getItem('login_user'))
        if(user_data){
            setUser(user_data)
        }
        else{
            setUser("");
        }
    },[check]);
    const logout=()=>{
        props.logout()
        setCheck(true)
    }
    return (
        <div className="container-fluid bg-dark" id="navv">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"><i className="fas fa-shopping-bag"></i> SHOPPING POINT <i className="fas fa-shopping-bag"></i></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">                                    
                                    <Link to="/product-detail/cart" className="nav-link"><i className="fas fa-shopping-cart"></i> Cart</Link>
                                </li>
                                <li className="nav-item">
                                    {user?
                                    <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      {user.name}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                      <li><Link to='/profile' className="dropdown-item">Profile</Link></li>
                                      <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                      
                                    </ul>
                                  </div>
                                    :<Link to="/signin" className="nav-link"><i className="fa fa-user"></i> Sign-in</Link>}
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>({
    user:state.loginUser.login_user
})
const mapDispatchToProps=(dispatch)=>({
    logout:()=>dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(header);
