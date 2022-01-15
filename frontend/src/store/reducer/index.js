import { combineReducers } from 'redux';
import products from './products';
import loginUsers from './loginUser';
import registerUsers from './registerUser';
import shipping from './shipping';
import savePayment from './payment';
import saveorder from './order';
export default combineReducers({
    product: products,
    loginUser: loginUsers,
    registerUser: registerUsers,
    shippingData: shipping,
    payment: savePayment,
    order: saveorder

})