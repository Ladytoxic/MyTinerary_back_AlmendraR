import { Schema, model, Types } from 'mongoose';

const collection = 'users';

const schema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    description: { type: String, require: false },
    image: { type: String, require: false },
    itineraries: { type: Types.ObjectId, ref: 'itineraries' },
    activities: { type: Types.ObjectId, ref: 'activities' }
},
    {
        timestamps: true
    });

const User = model(collection, schema);

export default User;