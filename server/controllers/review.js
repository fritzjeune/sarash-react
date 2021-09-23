
const Review = require("../models/Review");


// @route                 "api/dresses/reviews"
// method                 POST
// description            Add a review to a dress
// privacy                secured Route: must be an admin/creator
const addReview = async ( req, res, next ) => {
    try {
        const review = await Review.create(req.body);

       res.status(200).json({
           succes: true,
           msg: "successfully add the dress",
           data: review
       });
    } catch (err) {
        if (err) throw err;        
    }
}

// @route                 "api/dresses/reviews/:reviewId"
// method                 POST
// description            Comment a review made to a dress
// privacy                secured Route: must be an admin/creator
const commentReview = async ( req, res, next ) => {
    try {
        const review = await Review.findById(req.params.reviewId);

        // verify if the review exist
        if(!review) {
            return res.status(404).json({
                succes: false,
                msg: "we are unable to find this review"
            })
        }

        const comment = req.body;
        await review.comments.concat({comment});

        res.status(200).json({
           succes: true,
           msg: "successfully add the dress",
           data: review
       });
    } catch (err) {
        if (err) throw err;        
    }
}

module.exports = { addReview, commentReview };