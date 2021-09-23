import React, { Component } from "react";
import { CartIcon, LikeIcon } from "./icons";


export default class MiniDressCard extends Component {
    render() {
        return <div className="dress">
            <div className="img-box dress-img">
                <img src="" alt=""/>
                <div className="dress-action dress-react">
                    <LikeIcon />
                    <CartIcon />
                </div>
                <h4 className="item-price">250$</h4>
            </div>
            <div className="dress-info">
                <p className="item-title-lt">dress title</p>
            </div>    
        </div>
    }
}

export default ColletionBanner = (props) => {
    return <div className="collection-head">
        <img src="" alt=""/>
    </div>
}