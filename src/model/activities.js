import { Schema, model, Types } from 'mongoose';

const collection = 'activities';

const schema = new Schema({
    name: { type: String, require: true },
    image: { type: String, require: false },
    description: { type: String, require: false },
    user: { type: Types.ObjectId, ref: 'users' },
    city: { type: Types.ObjectId, ref: 'cities' },
    Activities: { type: Types.ObjectId, ref: 'Activities' }

},
    {
        timestamps: true
    });

const Activity = model(collection, schema);

export default Activity;