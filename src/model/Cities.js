import { Schema, model, Types } from 'mongoose';

const collection = 'cities';

const schema = new Schema({
    name: { type: String, require: true },
    country: { type: String, require: true },
    description: { type: String, require: false },
    image: { type: String, require: false },
    user: { type: Types.ObjectId, ref: 'users' }
},
    {
        timestamps: true
    });

const City = model(collection, schema);

export default City;