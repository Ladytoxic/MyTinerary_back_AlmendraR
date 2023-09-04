import { Schema, model, Types } from 'mongoose';

const collection = 'itineraries';

const schema = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: false },
    image: { type: String, require: false },
    duration: { type: Number, require: true },
    price: { type: Number, require: true },
    hashtags: [{ type: String, require: false }],
    user: {
        _id: { type: String },
        name: { type: String },
        image: { type: String }
    },
    city: { type: Types.ObjectId, ref: 'cities', require: true },
    activities: { type: Types.ObjectId, ref: 'activities' },
    likes: { type: Number, require: false },
    comments: { type: Types.ObjectId, ref: 'comments' }

},
    {
        timestamps: true
    });

const Itinerary = model(collection, schema);

export default Itinerary;