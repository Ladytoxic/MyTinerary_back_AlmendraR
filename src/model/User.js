import { Schema, model } from 'mongoose';

const collection = 'users';

const schema = new Schema({
    name: { type: String, require: true },
    country: { type: String, require: true },
    description: { type: String, require: false },
    image: { type: String, require: false }
},
    {
        timestamps: true
    });

const user = model(collection, schema);

export default user;