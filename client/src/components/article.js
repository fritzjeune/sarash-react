
import React, { Component } from "react";
import { LikeIcon, ShareIcon } from './icons';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip'


class Article extends Component {
    
    // constructor(props){
    //     super(props);
    // };

    render() {

        console.log(this.props.imgURL);
        return <Zoom ssrFadeout>
            <div className="card-prod">
                <div className="card-img-cont">
                    <img src={this.props.imgURL}  alt={this.props.title}/>
                    <div className="btn-card-cont">
                        <LikeIcon />
                        <ShareIcon />
                    </div>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{this.props.title}</h3>
                    <p className="card-text rating">{this.props.ratings}</p>
                    <p className="card-price">{this.props.price}</p>
                </div>
            </div>
        </Zoom>
    }
}

export default Article;