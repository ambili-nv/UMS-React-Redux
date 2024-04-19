// const mongoose = require('mongoose')
// const goalSchema = mongoose.Schema({

//     user:{
//         type:mongoose.Schema.Types.ObjectId,
//         required:true.valueOf,
//         ref:'User'
//     },
//     text: {
//         type: String,
//         required: [true, 'Please add a text value'],
//     },
// },
//     {
//         timestamps: true,
//     }
// )

// module.exports = mongoose.model('Goal',goalSchema)


const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'User ID is required'],
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Goal', goalSchema);
