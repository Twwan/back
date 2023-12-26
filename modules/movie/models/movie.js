import { model, Schema } from "mongoose";

const genre = new Schema({
    name: {
        type: String,
        required: true
    }
});

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    genres: {
        type: [genre],
        default: []
    },
    actors: {
        type: [Schema.Types.ObjectId],
        default: [],
        ref: "actors"
    },
    directors: {
        type: [Schema.Types.ObjectId],
        default: [],
        ref: "directors"
    }
});

export default model("movies", movieSchema);
