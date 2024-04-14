const AllinfoService = async (Request, CategoryModel, PostModel) => {
    try {

        let Category = await CategoryModel.find({})
        let Post = await PostModel.find({})

        return { status: "Success", Category: Category, Post:Post }

    } catch (error) {

        return { status: "fail", data: error.toString() }

    }
}
module.exports = AllinfoService