const validator = require("email-validator");

const EmailValidatorHelper = async (req, res) => {
    try {
        const Email = req.body.email;
        const EmailValidator = validator.validate(Email);

        const EmailValidatorCheck = {
            Email: Email,
            EmailValidator: EmailValidator,
        };

        return EmailValidatorCheck;
    } catch (error) {
        // Handle any errors
        throw new Error("An error occurred while validating email");
    }
};

module.exports = { EmailValidatorHelper };
