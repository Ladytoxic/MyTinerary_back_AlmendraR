import { Schema, model, Types } from 'mongoose';

const collection = 'comments';

const schema = new Schema({
    comment: { type: String, require: false },
    user: { type: Types.ObjectId, ref: 'users', require: true },
    itineraries: { type: Types.ObjectId, ref: 'itineraries' },
    user: { type: Types.ObjectId, ref: 'users' },
},
    {
        timestamps: true
    });

const Comment = model(collection, schema);

export default Comment;