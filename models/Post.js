const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, 'Please add a title'],
        unique: true,
        trim: true,
        maxLength: [40, 'Title cannot be more than 40 characters']
    },
    description:{
        type: String,
        required: true,
        maxLength: [120, 'Description cannot be more than 120 characters']
    }
})

module.exports = mongoose.models.Post || mongoose.model('Post',PostSchema)