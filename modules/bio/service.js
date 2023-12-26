import Bio from "./models/bio.js";

class SimpleService {
    async simpleServiceMethod(_id) {
        return await Bio.findById(_id);
    }
}

export default SimpleService;
