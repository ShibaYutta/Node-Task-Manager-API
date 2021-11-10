const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({
    name: {
        required:[true,"Must have a name"],
        type:String,
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Task', TaskSchema)