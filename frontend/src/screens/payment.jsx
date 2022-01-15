import React,{useEffect,useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link,Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { connect} from 'react-redux';
import { savePayment } from '../store/action/payment_action';


const payment = (props) => {
    const [shippingData,setShippingData]=useState({address:"",city:"",postal:"",country:""});
    const [pmethod,setPmethod]=useState();
    useEffect(() => {
        const data=JSON.parse(localStorage.getItem('shipping_address'))
        if(data != null){
            setShippingData(data)
        }
        else{
            setShippingData(shippingData)
        }
        
    }, []);

    useEffect(() => {
        props.paymentData(pmethod)
    }, [pmethod]);
     let navigate = useNavigate();
    const next=()=>{
        navigate('/product-detail/cart/shipping/payment/placeOrder')
    }
    
    
    return (
        <div className="App">
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-12 mx-auto" style={{marginTop:"3rem"}}>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/product-detail/cart" style={{textDecoration:"none",color:"black"}}>Cart</Link></li>
                                <li className="breadcrumb-item" aria-current="page"><Link to="/product-detail/cart/shipping" style={{textDecoration:"none",color:"black"}}>Shipping</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                <li className="breadcrumb-item " aria-current="page">Place Order</li>
                            </ol>
                        </nav>
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Payment Method</h1>
                                    <h2>Shipping to:</h2>
                                    <br />
                                    <div className="form-group" style={{fontWeight:"bold"}}>
                                        <p>Address: {shippingData.address}</p>
                                    </div>
                                    <br />
                                    <div className="form-group" style={{fontWeight:"bold"}}>
                                        <p>City: {shippingData.city}</p>
                                    </div>
                                    <br />
                                    <div className="form-group"style={{fontWeight:"bold"}}>
                                        <p>Postal code: {shippingData.postal}</p>
                                    </div>
                                    <br />
                                    <div className="form-group" style={{fontWeight:"bold"}}>
                                        <p>Country: {shippingData.country}</p>
                                    </div>
                                    <Link to="/product-detail/cart/shipping" className="btn btn-dark">Want Changes?</Link>
                            </div>
                            <div className="col-md-6">
                                <h1>
                                    <u>Select payment method</u>
                                    <br />
                                    <br />
                                    <i className="fab fa-cc-paypal" style={{color:"blue",fontSize:"3rem"}}></i>&nbsp;
                                    <i className="fas fa-credit-card" style={{color:"blue",fontSize:"3rem"}}></i>&nbsp;
                                    <i className="fab fa-cc-visa" style={{color:"blue",fontSize:"3rem"}}></i>
                                    <br />
                                    
                                </h1>
                                <div className="form-check">
                                    <input className="form-check-input" value="Cash on delivery" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e)=>setPmethod(e.target.value)}/>
                                    <label className="form-check-label" for="flexRadioDefault2"style={{fontWeight:"bold"}} >
                                    Cash on delivery
                                    </label>          
                                </div>
                                <br />
                                {pmethod?<button className="btn btn-dark" onClick={next}>Continue</button>:<button className="btn btn-dark" disabled>Continue</button>}
                                
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
            <br />
            <Footer/>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>({
    paymentData:(data)=>dispatch(savePayment(data))
})
export default connect(null,mapDispatchToProps) (payment);
