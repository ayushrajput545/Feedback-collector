const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now()
    }


},{ timestamps: true })

module.exports = mongoose.model('feedbacks' , feedbackSchema) // we got entry in DB from social-login name