import React , { Component } from "react";
import { LikeIcon } from "./icons";


const Review = (props) => {
    return <div className="review">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, iusto.</p>
        <div>
            <div>
                <p className="rating">⭐⭐⭐⭐⭐</p>
                <p>Costumer Name</p>
            </div>
            <div>
                <span>
                    <LikeIcon />
                    <p>20</p>
                </span>
                <span>
                    <LikeIcon />
                    <p>25</p>
                </span>
            </div>
        </div>
        <div>
            <div className="review-thum">1</div>
            <div className="review-thum">1</div>
            <div className="review-thum">1</div>
        </div>
    </div>
}

const NewReview = (props) => {
    return <div className="add-review-container">
        <form>
            <input type="text" placeholder="Enter your review , please add some picture if possible. it can be Helpfull for our custumers"/>
            <input type="files"/>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default class ReviewsContainer extends Component {
    render() {
        return <div className="reviews-section">
            <Review />
            <NewReview />
        </div>
    }
} 