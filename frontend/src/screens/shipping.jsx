import React,{useEffect,useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {shipping} from '../store/action/shipping_action';
import { connect } from 'react-redux';
import { Link,Navigate} from 'react-router-dom';


const Shipping = (props) => {
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [postal,setPostal]=useState('');
    const [country,setCountry]=useState('');
    const [done,setDone]=useState('');
    const [error,setError]=useState('');
    const submit=()=>{ 
        let obj={
            address:address,
            city:city,
            postal:postal,
            country:country
        }
        if(address&&postal&&country&&city){
            props.shippingData(obj)
            setDone('done')
        }
        else{
            setError('Error')
        }
    }
    const back=()=>{
        localStorage.removeItem('shipping_address')
    }
    if(done){
        return <Navigate to="/product-detail/cart/shipping/payment"/>
    }
    return (
        <div className="App">
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-12 mx-auto" style={{marginTop:"3rem"}}>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/product-detail/cart" style={{textDecoration:"none",color:"black"}}>Cart</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Shipping</li>
                            <li class="breadcrumb-item " aria-current="page">Payment</li>
                            <li class="breadcrumb-item " aria-current="page">Place Order</li>
                        </ol>
                    </nav>
                        <h1>Shipping</h1>
                    {error?<div class="alert alert-danger" role="alert">
                        All fields are required
                    </div>:null}
                        <div className="form-group">
                            <label>Address</label>
                            <br />
                            <input type="text" required className="form-control" placeholder="Enter address" onChange={(e)=>setAddress(e.target.value)}/>
                        </div>
                        
                        <br />
                        <div className="form-group">
                            <label>City</label>
                            <br />
                            <input type="text" required className="form-control" placeholder="Enter city" onChange={(e)=>setCity(e.target.value)}/>
                        </div>
                        <br />
                        
                        <div className="form-group">
                            <label>Postal Code</label>
                            <br />
                            <input type="number" required className="form-control" placeholder="Enter postal code"onChange={(e)=>setPostal(e.target.value)}/>
                        </div>
                        <br />
                        
                        <div className="form-group">
                            <label>Country</label>
                            <br />
                            <input type="text" required className="form-control" placeholder="Enter country"onChange={(e)=>setCountry(e.target.value)}/>
                        </div>
                        <br />
                        <Link to="/product-detail/cart"><button className="btn btn-dark" onClick={back} >Back to cart</button></Link>
                        <button type="submit" className="btn btn-dark"style={{float:"right"}} onClick={submit}>Continue</button>
        
                    
                    <br />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
const mapStateToProps=(state)=>({
    shippingState:state.shippingData.shipping_data,
})
const mapDispatchToProps=(dispatch)=>({
    shippingData:(data)=>dispatch(shipping(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Shipping);
