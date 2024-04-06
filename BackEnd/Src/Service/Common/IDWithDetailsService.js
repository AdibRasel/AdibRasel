const Mongoose = require("mongoose");

const IDWithDetailsService = async (Request, DataModel) => {
    try {
        const { ID } = Request.body;

        if (!ID) {
            throw new Error("ID is required in the request body");
        }


        const ObjectId = Mongoose.Types.ObjectId;

        const data = await DataModel.aggregate([
            {
                $match: {
                    _id: new ObjectId(ID)
                }
            }
        ]);

        if (data.length === 0) {
            throw new Error("Details not found for the provided ID");
        } else {
            return { status: "Success", data };
        }
    } catch (error) {
        console.error("Error in IDWithDetailsService:", error);
        return { status: "fail", error: error.message };
    }
}

module.exports = IDWithDetailsService;
