const mongoose = require('mongoose');

const squadSchema = new mongoose.Schema({
    name: String,
    
    employees: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee',
            required: true
        }
    ]
})

module.exports = mongoose.model('Squad', squadSchema);