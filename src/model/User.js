import { Schema, model, Types } from 'mongoose';

const collection = 'users';

const schema = new Schema({
    email: { type: String, require: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
    description: { type: String, require: false },
    image: { type: String, require: false },
    online: { type: Boolean, default: false },
    verified: { type: Boolean, default: true },
    verified_code: { type: String },
    itineraries: { type: Types.ObjectId, ref: 'itineraries' },
    activities: { type: Types.ObjectId, ref: 'activities' }
},
    {
        timestamps: true
    });

const User = model(collection, schema);

export default User;