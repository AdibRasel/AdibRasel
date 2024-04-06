const Mongoose = require("mongoose");

const IDWithDeleteService = async (Request, DataModel) => {
    try {
        const { ID } = Request.body;

        if (!ID) {
            throw new Error("ID is required in the request body");
        }

        const ObjectId = Mongoose.Types.ObjectId;
        const DeleteItem = { _id: new ObjectId(ID) };

        const data = await DataModel.deleteOne(DeleteItem);

        console.log(data);

        if (data.deletedCount === 0) {
            throw new Error("No document deleted for the provided ID");
        } else {
            return { status: "Delete Success", data };
        }
    } catch (error) {
        console.error("Error in ID With Delete Service:", error);
        return { status: "fail", error: error.message };
    }
};

module.exports = IDWithDeleteService;
