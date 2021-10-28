const mongoose = require('mongoose');

const squadSchema = mongoose.Schema({
    "name": String,
    
    employees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
            required: true
        }
    ]
})

module.exports = mongoose.model('Squad', squadSchema);