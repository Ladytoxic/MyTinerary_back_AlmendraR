import { Schema, model, Types } from 'mongoose';

const collection = 'itineraries';

const schema = new Schema({
    name: { type: String, require: true },
    image: { type: String, require: false },
    duration: { type: String, require: true },
    price: { type: Number, require: true },
    hashtags: [{ type: String, require: false }],
    user: { type: Types.ObjectId, ref: 'users', require: true },
    city: { type: Types.ObjectId, ref: 'cities', require: true },
    activities: { type: Types.ObjectId, ref: 'activities' },
    likes: { type: String, require: false },
    coments: { type: Types.ObjectId, ref: 'coments' }

},
    {
        timestamps: true
    });

const Itinerary = model(collection, schema);

export default Itinerary;