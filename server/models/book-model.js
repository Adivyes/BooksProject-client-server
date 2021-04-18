const mongoose = require("mongoose");
// const { model } = require("../DB");
const Schema = mongoose.Schema;

const Book = new Schema(
    {
        name:String,
        numberOfPages:Number,
        date: { 
            type: Date, 
            default: Date.now },
    },
    
);
module.exports = mongoose.model("booksCollection",Book)