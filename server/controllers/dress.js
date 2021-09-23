const Dress = require("../models/Dress");

// @route                 "api/dresses"
// method                 POST
// description            Add a new dress
// privacy                secured Route: must be an admin/creator

const addDress = async ( req, res, next ) => {
    try {
       const dress = await Dress.create(req.body);

       res.status(200).json({
           succes: true,
           msg: "successfully add the dress",
           data: dress
       });
    } catch (err) {
        if (err) throw err;        
    }
}

// @route                 "api/dresses/:dressId"
// method                 PUT
// description            Update a dress, it can be the pictures, desciption, price , an so one!
// privacy                secured Route: must be an admin/creator to perfom this action.
const updateDress = async (req, res ,next) => {
    try {
        const dress = await Dress.findById(req.params.dressId);

        // verify if the dress exist in database
        if(!dress) {
            return res.status(404).json({
                succes: false,
                msg: "dress not found"
            })
        }

        //TODO verify if the editor is an admin/creator
        const dressUpdated = await Dress.findByIdAndUpdate(req.params.dressId, req.body, {
            new: true,
            runValidators: true
        }, (err, doc) => {
            if(err) {
                return res.status(403).json({
                    succes: false,
                    msg: `error updating the dress no:${req.params.dressId}`
                });
            } else {
                return doc;
            }
        });

        res.status(200).json({
            succes: true,
            msg: "dress updated successfully",
            data: dressUpdated
        });




    } catch (err) {
        if (err) throw err;
    }
}







module.exports = { addDress, updateDress };

