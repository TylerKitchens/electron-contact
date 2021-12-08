const mongoose = require('mongoose')

const contactSchema =  new mongoose.Schema({
    fName : {
        type : String,
        required : true
    },
    lName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
},{
    timestamps : true
}
)

module.exports =  mongoose.model('Contact', contactSchema) 