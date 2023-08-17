import { Schema, model } from 'mongoose';

const collection = 'users';

const schema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    description: { type: String, require: false },
    image: { type: String, require: false }
},
    {
        timestamps: true
    });

const User = model(collection, schema);

export default User;