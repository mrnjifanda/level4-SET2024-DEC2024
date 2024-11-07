const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    cateory: {
        type: String,
        enum: [ 'Web development', 'Cyber security', 'Graphic design', 'Digital Marketing' ],
        required: true
    },
});

module.exports = model('Course', courseSchema);
