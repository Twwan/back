import { Types } from "mongoose";
import { TokenGuard } from "../../core/token-guard.js";
import User from "./models/user.js";

class UserService {
    async regUser(doc) {
        const userExistStatus = await User.findOne({ login: doc.login });
        if (userExistStatus) return false;
        const userId = new Types.ObjectId();
        await new User({ _id: userId, ...doc }).save();
        return await TokenGuard.generate({ _id: userId });
    }

    async authUser(doc) {
        const userExistStatus = await User.findOne(doc);
        if (!userExistStatus || userExistStatus.password != doc.password) return false;
        return TokenGuard.generate({ _id: userExistStatus._id });
    }

    async getUser(doc) {
        const userData = await User.findById(_id).select("-password");
        return userData;
    }
}

export default UserService;
