const mongoose = require('mongoose');
const { Schema} = mongoose;


var eventsSchema = new Schema({
    birth: ObjectId,
    partnerships: [ObjectId],
    children: [ObjectId]
})

const individualSchema = new Schema({
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
        nickName: String,
    },
    gender: String,
    img: String,
    gender: ['male','female'],
   // events: eventsSchema
});

const birthEventSchema = new Schema({
    date: Date,
    place: ObjectId,
    individual: ObjectId,
    parents: [
        { id: 'I007', role: 'father' },
        { id: 'I008', role: 'mother' }
    ]
}); 

mongoose.model('individuals', individualSchema);
mongoose.model('births', birthEventSchema);
mongoose.model('events', eventsSchema);