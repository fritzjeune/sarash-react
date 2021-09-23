import React, { Component } from "react";
import { LikeIcon, ShareIcon, ViewsIcon } from "./icons";




class ArticleDetail extends Component {


    render (props) {
        return <div className="product-present">
            <div className="img-viewer">
                <h2 className="item-title-lg">Article title</h2>
                <div className="img-box">
                    <div className="images-box">

                    </div>
                    <a className="prev">&#10094;</a>
                    <a className="next">&#10095;</a>
                    <div className="dress-action img-react">
                        <LikeIcon />
                        <ShareIcon />
                    </div>
                    <div className="rate-info">
                        <div>
                            <p className="item-ratings"></p>
                        </div>
                        <div>
                            <ViewsIcon />
                            <span> 250 </span>
                        </div>
                    </div>
                    <h4 className="item-price">150$</h4>
                </div>
                <div className="item-thumb">
                    <img className="demo" src="" alt="" />   
                    <img className="demo" src="" alt="" />   
                    <img className="demo" src="" alt="" />   
                    <img className="demo" src="" alt="" />   
                </div>
                <div className="item-details">
                    <div className="item-action">
                        <a className="a-link">Add to Cart</a>
                        <a className="a-link">Buy Now</a>
                    </div>
                    <p className="item-description">Description: <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!</p>
                </div>
            </div>
        </div>
    }
}

export default ArticleDetail;