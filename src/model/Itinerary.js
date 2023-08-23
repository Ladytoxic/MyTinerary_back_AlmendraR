import { Schema, model, Types } from 'mongoose';

const collection = 'itinerary';

const schema = new Schema({
    name: { type: String, require: true },
    image: { type: String, require: false },
    duration: { type: String, require: true },
    price: { type: Number, require: true },
    hashtags: [{ type: String, require: false }],
    currency: { type: String, require: false },
    user: { type: Types.ObjectId, ref: 'users' },
    city: { type: Types.ObjectId, ref: 'cities' }
},
    {
        timestamps: true
    });

const Itinerary = model(collection, schema);

export default Itinerary;