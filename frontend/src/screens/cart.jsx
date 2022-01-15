import React,{useEffect,useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './cart.css';
import {Link} from 'react-router-dom'


const cart = () => {
    const [items,setItems]=useState([]);
    
    const getItem=()=>{
        var get=JSON.parse(localStorage.getItem('cartList'||'[]'))
        if(get === null){
            setItems([])
        }
        else{
            setItems(get)
        }
    }

    useEffect(() => {
        getItem();
    },[]);
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
    
    return (
        <div className="App">
            
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                    
                        <div className="row">
                            <h1><u>Shopping cart</u></h1>
                            <div className="col-md-8" style={{overflowX:"auto"}}>
                                <table>
                                    {items.length===0?<h3>There are no items in your cart.&nbsp;
                                        <Link to="/">continue for shopping</Link>
                                    </h3>:
                                    <thead>
                                        <tr style={{backgroundColor:"lightgray"}}>
                                        <td>Product</td>
                                        <td>Title</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td>Remove-item</td>
                                    </tr>
                                    </thead>
                                    }
                                    <tbody>
                                    {items.length === 0?null:items.map((value,index)=>{
                                        return <tr key={index}>
                                        <td>
                                            <img src={value.image} alt="" style={{height:"3rem",width:"3rem"}}/>
                                        </td>
                                        <td>{value.title}</td>
                                        <td>{value.price}$</td>
                                        <td>{value.qty}-items</td>
                                        <td>
                                            <button className="btn btn-outline-dark" onClick={()=>Remove(index)}><i className="fas fa-trash"></i></button>
                                        </td>
                                        </tr>
                                    })}
                                    </tbody>
                                
                                    
                                </table>
                            </div>
                            <div className="col-md-4" id="right">
                                <h3 style={{letterSpacing:"4px"}}><u>Invoice receipt:</u></h3>
                                <hr />
                                <h5><b>Total Items:</b> {count} items</h5>
                                <hr />
                                <h5><b>Subtotal:</b> {price}$</h5>
                                <hr />
                                {items.length===0?<button className="btn btn-dark" disabled={true}>Proceed to checkout</button>:
                                
                                <Link to="/product-detail/cart/shipping" className="btn btn-dark" >Proceed to checkout</Link>
                                }
                                <br />
                                <br />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default cart
