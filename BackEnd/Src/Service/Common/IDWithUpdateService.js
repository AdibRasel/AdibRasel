const Mongoose = require("mongoose");

const IDWithUpdateService = async (Request, DataModel) => {
    try {
        const id = Request.params.id;

        const PostBody = Request.body;

        if (!id) {
            throw new Error("ID is required in the request parameters");
        }

        const ObjectId = Mongoose.Types.ObjectId;
        const myQuery = { _id: new ObjectId(id) };

        const data = await DataModel.updateOne(myQuery, PostBody);

        if (data.nModified === 0) {
            throw new Error("No document updated for the provided ID");
        } else {
            console.log(data);
            return { status: "Update Success", data };
        }
    } catch (error) {
        console.error("Error in ID With Update Service:", error);
        return { status: "fail", error: error.message };
    }
};

module.exports = IDWithUpdateService;
