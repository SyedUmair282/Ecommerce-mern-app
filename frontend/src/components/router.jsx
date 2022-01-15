import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Mainscreen from '../screens/mainscreen'
import Productdetails from '../screens/productdetail';
import Cart from '../screens/cart';
import Shipping from '../screens/shipping';
import Signin from '../screens/signin';
import Registration from '../screens/registration';
import Payment from '../screens/payment';
import PlaceOrder from '../screens/placeOrder';





function AppRouter() {
    return (
        <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainscreen/>}/>
          <Route path="/product-detail" element={<Productdetails/>}/>
          <Route path="/product-detail/cart" element={<Cart/>}/>
          <Route path="/product-detail/cart/shipping" element={<Shipping/>}/>
          <Route path="/product-detail/cart/shipping/payment" element={<Payment/>}/>
          <Route path="/product-detail/cart/shipping/payment/placeOrder" element={<PlaceOrder/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
        </BrowserRouter>
        
        </div>
    );
  }
  
export default AppRouter;