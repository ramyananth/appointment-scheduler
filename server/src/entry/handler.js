"use strict";
exports.__esModule = true;
module.exports.handler = function (event, context) {
    try {
        console.log(event.httpMethod);
        return {
            message: 'Serverless function success!',
            event: event
        };
    }
    catch (err) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Serverless function success!',
                input: event
            }, null, 2)
        };
    }
};
