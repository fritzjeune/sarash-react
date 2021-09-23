import React, { Component } from "react";
import Article from "./article";
import dresses from "../dresses";
import Fade from 'react-reveal/Fade';


class ArticlesListPreview extends Component {


    render () {
        return <div className="featured-products">
                <h1 className="section-title">Featured Products</h1>
                {  
                    dresses.map(dress => {
                        var url = `/images/${dress.imageURL}`
                        return <Article title={dress.title} uid={dress.uid} ratings={dress.ratings} imgURL={url} price={dress.price} key={dress.uid} />
                    })
                }
                <div className="a-link-box">
                    <a className="a-link" href="">Go to Collections</a>
                </div>
            </div>
        
    }
}


export default ArticlesListPreview;