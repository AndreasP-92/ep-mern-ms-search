const mailService = require('../services/mailService')

module.exports = async function (context, req) {
    const requestType = req.query.requesttype;
    console.log(requestType);
    console.log(req.query)

    let responseMessage = {
        object : {},
        success: false,
        msg     : "Not Found",
        status  : 202
    }


    if(requestType == "validate"){
        const body = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            mail : req.body.mail,
            uuid : req.body.uuid
        };

        responseMessage = mailService.validateAccount(body);

    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}