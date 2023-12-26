import Movie from "./models/movie.js";

class MovieService {
    async getMovie(doc) {
        const movieData = await Movie.findById(_id);
        return movieData;
    }
}

export default MovieService;
