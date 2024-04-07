const Mongoose = require("mongoose");

const CategoryFullDetailsWithAllPost = async (Request, CategoryModel, PostModel) => {
    try {
        const { ID } = Request.body;

        if (!ID) {
            throw new Error("ID is required in the request body");
        }

        const ObjectId = Mongoose.Types.ObjectId;

        const CategoryDetails = await CategoryModel.aggregate([
            {
                $match: {
                    _id: new ObjectId(ID)
                }
            }
        ]);

        const PostDetails = await PostModel.aggregate([
            {
                $match: {
                    CategoryID: new ObjectId(ID)
                }
            }
        ]);

        // if (CategoryDetails.length === 0) {
        //     throw new Error("Category details not found for the provided ID");
        // }

        // if (PostDetails.length === 0) {
        //     throw new Error("Post details not found for the provided ID");
        // }

        return { status: "Success", CategoryDetails: CategoryDetails, PostDetails: PostDetails };
    } catch (error) {
        console.error("Error in Category Full Details With All Post:", error);
        return { status: "fail", error: error.message };
    }
}

module.exports = CategoryFullDetailsWithAllPost;
