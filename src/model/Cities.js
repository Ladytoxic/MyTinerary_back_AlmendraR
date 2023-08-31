import { Schema, model, Types } from 'mongoose';

const collection = 'cities';

const schema = new Schema({
    name: { type: String, require: true },
    country: { type: String, require: true },
    description: { type: String, require: false },
    image: { type: String, require: false },
    currency: { type: String, require: false },
    user: { type: Types.ObjectId, ref: 'users' },
    itineraries: { type: Types.ObjectId, ref: 'itineraries' }
},
    {
        timestamps: true
    });

const City = model(collection, schema);

export default City;