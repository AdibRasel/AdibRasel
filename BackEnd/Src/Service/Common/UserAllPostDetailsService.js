const UserAllPostDetailsService = async (Request, DataModel) => {
    try {
        const { Email } = Request.body;

        if (!Email) {
            throw new Error("Email is required");
        }

        const data = await DataModel.aggregate([
            {
                $match: {
                    UserEmail: Email
                }
            }
        ]);

        if (data.length === 0) {
            throw new Error("Post not found");
        } else {

            return { status: "Success", data };
        }

    } catch (error) {
        return { status: "fail", error: error.message };
    }
}

module.exports = UserAllPostDetailsService;
