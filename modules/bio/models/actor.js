import { model, Schema } from "mongoose";

const actorSchema = new Schema({
    bio: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "bios"
    }
});

export default model("actors", actorSchema);
