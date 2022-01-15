import React from 'react';
import '../screens/homescreen.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import {connect} from 'react-redux';
import {product_data} from '../store/action'


const homescreen = (props) => {
    const data1=props.producting;
    const spin=props.loading
    useEffect(() => {
        setTimeout(
            function() {
                props.products();
            }, 2000);
        
    }, []);
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <br />
                    <h1 id="head">Latest Products</h1>
                    <div id="mid">
                    {spin?<div className="spinner-grow spinner-grow-lg" style={{position:"fixed",top:"50%",bottom:"50%",height:"4rem",width:"4rem"}}></div>
                    :data1.map((value,index)=>{
                        return <div key={index} >
                            <br />
                            <div className="card">
                            <img src={value.image} style={{height:"16rem"}} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{value.title.substring(0,16)}...</h5>
                                <p className="card-text">Price: {value.price}$</p>
                                <strong><p>Rating: {value.rating.rate} <i className="fa fa-star" style={{color:"yellowgreen"}}></i></p></strong>
                               <Link to="/product-detail" state={{title:value.title,
                                price:value.price,
                                description:value.description,
                                stock:value.rating.count,
                                rate:value.rating.rate,
                                image:value.image,
                                _id:value._id
                                }}>
                                    <button className="btn btn-dark">More Details</button>
                               </Link>
                            </div>
                        </div>
                        </div>
                        
                    })}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
    producting:state.product.products,
    loading:state.product.loading
});
const mapDispatchToProps=(dispatch)=>({
    products:()=>dispatch(product_data())
});

export default connect(mapStateToProps,mapDispatchToProps)(homescreen);
