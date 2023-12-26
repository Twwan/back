import { model, Schema } from "mongoose";

const userSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteMovies: {
        type: [Schema.Types.ObjectId],
        default: [],
        ref: "movies" // dto будет по нажатии на лайк отрабатывать в movies
    },
    favoriteActors: {
        type: [Schema.Types.ObjectId],
        default: [],
        ref: "actors" // dto будет по нажатии на лайк отрабатывать в movies
    },
    favoriteDirectors: {
        type: [Schema.Types.ObjectId],
        default: [],
        ref: "directors" // dto будет по нажатии на лайк отрабатывать в movies
    }
});

export default model("users", userSchema);
