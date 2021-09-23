import React , { Component } from "react";

const CartListItem = (props) => {
    return <div className="cart-item">
        <div className="cart-art-info">
            <img className="art-thumb" src="" alt=""/>
            <div>
                <p className="cart-art-title"> article title</p>
                <p className="lot-number"> 154534</p>
            </div>
        </div>
        <h4 className="cart-art-price">250</h4>
    </div>
}

class Cart extends Component {
    state = {
        
    }

    render () {
        return <div className="cart-box">
            <div className="cart-item">
                <h4>Cart</h4>
                <div>
                    <CartIcon />
                    <b>5</b>
                </div>
            </div>
            <div className="cart-item-box">
                <CartListItem />
            </div>
            <div className="cart-item cart-total">
                <p>Total: </p>
                <h4 className="cart-art-price">US$1295</h4>
            </div>
            <div className="cart-item">
                <button id="ctnSopping">Continue Shopping</button>
                <button id="checkOutbtn">Check out</button>
            </div>
        </div>
    }
}

export default Cart;