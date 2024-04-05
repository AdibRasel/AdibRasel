const AllDetailsService = async (Request, DataModel) => {
    try {

        let data = await DataModel.find({})

        return { status: "Success", data: data }

    } catch (error) {

        return { status: "fail", data: error.toString() }

    }
}
module.exports = AllDetailsService