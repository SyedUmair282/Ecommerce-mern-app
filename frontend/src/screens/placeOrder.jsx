import React,{useEffect,useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link,Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { saveOrder } from '../store/action/order_action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const placeOrder = (props) => {
    const navigate = useNavigate();
    const [items,setItems]=useState([]);
    const [pmethod,setPayment]=useState("none");
    const [error,setError]=useState(null);
    const [shippingData,setShippingData]=useState({address:"none",city:"none",postal:"none",country:"none"});
    const [active,setActive]=useState(true);
    useEffect(() => {
        const data=JSON.parse(localStorage.getItem('shipping_address'))
        if(data != null){
            setShippingData(data)
        }
        else{
            setShippingData(shippingData)
        }
        var get=JSON.parse(localStorage.getItem('cartList'||'[]'))
        if(get === null){
            setItems([])
        }
        else{
            setItems(get)
        }
        const pay=JSON.parse(localStorage.getItem('payment_data'))
        if(pay){
            setPayment(pay)
        }
        else{
            setPayment("none")
        }
    }, []);

    //calculation
    var count=0
    var price=0
    var Remove;
    if(items.length){
        const countQty=()=>{
            for (let index = 0; index < items.length; index++) {
                count =count + items[index].qty;
            }
        }
        countQty();
        const total=()=>{
            for (let index = 0; index < items.length; index++) {
                price =price + (items[index].qty*items[index].price);
            }
        }
        total();
        Remove=(index)=>{
            var list = localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [];
            list.splice(index,1);
            localStorage.setItem('cartList', JSON.stringify(list));
            setItems(list)

        }
    }

    //notification of place order
    const data4=JSON.parse(localStorage.getItem('payment_data'))
    const notify=()=>{
        
        toast.success('Your order has been placed',{
          position:"top-center"  
        })
        if(data4 === "Cash on delivery"){
            setTimeout(()=>{
                navigate('/')
                localStorage.removeItem('payment_data');
                localStorage.removeItem('shipping_address');
                localStorage.removeItem('cartList');
            },5000)
        }
            //return <Navigate to="/"/>    
        // else{
        //     return <Navigate to="/paypal-integration"/>
        // }
    }

    //order place and contraints
    const data1=JSON.parse(localStorage.getItem('shipping_address'))
    const data2=JSON.parse(localStorage.getItem('login_user'))
    const data3=JSON.parse(localStorage.getItem('cartList'))
    const checkout=()=>{
        setActive(false)
        if(data1&&data3&&data4){
            if(data2){
                props.order({
                    orderItems:items,
                shipping:shippingData,
                paymentMethod:pmethod,
                shippingPrice:50,
                totalPrice:price+50
                })
                console.log("call hogaya");
               notify();
            
            }
            else{
                setError("login error")
            }
        }
        else{
            setError("requirement error")
        }
    }
    return (
        <div className='App'>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-12 mx-auto" style={{marginTop:"2rem"}}>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/product-detail/cart" style={{textDecoration:"none",color:"black"}}>Cart</Link></li>
                                <li className="breadcrumb-item" aria-current="page"><Link to="/product-detail/cart/shipping" style={{textDecoration:"none",color:"black"}}>Shipping</Link></li>
                                <li className="breadcrumb-item" aria-current="page"><Link to="/product-detail/cart/shipping/payment" style={{textDecoration:"none",color:"black"}}>Payment</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Place Order</li>
                            </ol>
                        </nav>
                        <div className='row'>
                            <div className='col-md-10 col-12 mx-auto'>
                                <h1>Order Summary</h1>
                                {error === "login error"?<div className="alert alert-danger" role="alert">Please! Login to checkout</div>:error === "requirement error"?
                                <div className="alert alert-danger" role="alert">Please! Fill all requirements to checkout</div>:null}
                                <div style={{border:"2px solid lightgrey",borderRadius:"1rem",backgroundColor:"lightgray"}}>
                                    <div style={{margin:"1rem"}}>
                                        <h2>Shipping to:</h2>
                                        <p>Address: {shippingData.address}</p>
                                        <p>Country: {shippingData.country}</p>
                                        <p>Postal code: {shippingData.postal}</p>
                                        <p>City: {shippingData.city}</p>
                                        <hr />
                                        <h2>Invoice:</h2>
                                        <p>Total items: {count}</p>
                                        <p>Payment: {pmethod}</p>
                                        <p>Shipping Price: $50</p>
                                        <p>Total items price: ${price}</p>
                                        <p>Total Price: ${price + 50}</p>
                                    </div>
                                </div>
                                <br />
                                {active?<button className='btn btn-dark' onClick={checkout}>Checkout</button>:
                                <button className='btn btn-dark' disabled>Checkout</button>}
                                
                                <ToastContainer
                                 toastStyle={{ backgroundColor: "black",color:"white" }} />
                                {/* {spin?<div class="spinner-border spinner-border-sm" role="status"></div>:null} */}
                                
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
const mapStateToProps=(state)=>({
    status:state.order.status
})
const mapDispatchToProps=(dispatch)=>({
    order:(data)=>dispatch(saveOrder(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(placeOrder);
