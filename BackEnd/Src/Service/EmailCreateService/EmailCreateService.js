const EmailCreateService = async (Request, DataModel) => {
    try {
        let PostBody = Request.body;
        let CurrentEmail = Request.body.Email;

        // Query the database for existing emails
        let OldEmail = await DataModel.findOne({ Email: CurrentEmail });

        if (OldEmail) {
            return { status: "This Email Already Exists", data: OldEmail, Email: CurrentEmail }
        } else {
            let data = await DataModel.create(PostBody);
            return { status: "success", data: data, Email: CurrentEmail }
        }
    } catch (error) {
        return { status: "fail", data: error }
    }
}

module.exports = EmailCreateService;
