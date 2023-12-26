import { model, Schema } from "mongoose";

const bioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    deathDate: {
        type: Date
    },
    description: {
        type: String,
        default: ""
    }
});

export default model("bios", bioSchema);
