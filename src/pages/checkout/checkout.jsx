import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart-selector';
import CheckoutItem from '../../component/checkout-item/checkout-item';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button';
function CheckoutPage(props){
    return(
        <div className='checkout-page'>
        <div className='checkout-header'>
        <div className='header-block'>
       <span>Products</span>     
        </div>
        <div className='header-block'>
       <span>Description</span>     
        </div>
        <div className='header-block'>
       <span>Quantity</span>     
        </div>
        <div className='header-block'>
       <span>Price</span>     
        </div>
        <div className='header-block'>
       <span>Remove</span>     
        </div>
        </div>
        {props.cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
        <div className='total'>
        <span>TOTAL:${props.total}</span>

        </div>
        <div className="test-warning">
            *Please use the following test credit card for payments* 
            <br/>
            4242 4242 4242 4242 - Exp :01/22 - CVV:123
        </div>
        <StripeCheckoutButton price={props.total}/>
    </div>
    )
    
}
const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);