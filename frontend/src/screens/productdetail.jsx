import React,{useState} from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import {useLocation} from 'react-router';
import { Link } from 'react-router-dom';
import './productdetail.css';



function productscreen() {
    const location = useLocation()
    const [qty,setQty]=useState(1);
    const increment=()=>setQty(qty+1)
    const decrement=()=>{
        setQty(qty-1)
        if(qty <= 0){
        setQty(0)
        }
    }   
    
    const addCart=()=>{
        var cartList = [];
        let arr={
            productId:location.state._id,
            title:location.state.title,
            price:location.state.price,
            description:location.state.description,
            stock:location.state.stock,
            rate:location.state.rate,
            image:location.state.image,
            qty:qty
        }
            cartList.push(arr);
            cartList=cartList.concat(JSON.parse(localStorage.getItem('cartList')||'[]'));
            


        localStorage.setItem("cartList", JSON.stringify(cartList));
  
    }

    

    
    //console.log("hello==>",location.state.title);
    
    return (
        <div className="App">
            <Header/>
            <br />
            {/* middle body */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row">
                            {/* left side */}
                        <div className="col-md-6">
                            <Link to="/" className="btn btn-outline-dark"><i className="fa fa-arrow-left"></i> Go Back</Link>
                            <br />
                            <br />
                            <img src={location.state.image} alt="" id="img-detail" className="img-fluid"/>
                        </div>

                            {/* right side */}
                        <div className="col-md-6" id="right-side">
                            <h4>{location.state.description}</h4>
                            <hr />
                            <h5>{location.state.title}</h5>
                            <hr />
                            <h6>Price: {location.state.price}$ <i className="fa fa-money-bill-wave"></i></h6>
                            <hr />
                            <h6>Stock: {location.state.stock > 0 ? `${location.state.stock} products`:`Out of stock`} <i className="fa fa-inventory"></i></h6>
                            <hr />
                            <strong><p>Rating: {location.state.rate} <i className="fa fa-star"></i></p></strong>
                            <hr />
                            <span>Qty: <button className="btn btn-outline-dark" id="dec" onClick={decrement}>-</button> {qty} <button onClick={increment} className="btn btn-outline-dark" id="inc">+</button></span>
                            <hr />
                            <Link to={`/product-detail/cart`} >
                            {location.state.stock > 0 && qty > 0 ?<button className="btn btn-dark" onClick={addCart}>Add to cart</button>:null}
                            </Link>
                            {/* to={`/product-detail/cart?qty=${qty}` */}
                            {/* to="/product-detail/cart" */}
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

export default productscreen;
