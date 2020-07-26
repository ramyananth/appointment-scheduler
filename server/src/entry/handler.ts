import { ApiRequest } from '../models/lambda';

module.exports.handler = (event: ApiRequest, context: any): any => {
  try {
    console.log(event.httpMethod);

    return {
      message: 'Serverless function success!',
      event,
    };
  } catch (err) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Serverless function success!',
          input: event,
        },
        null,
        2
      ),
    };
  }
};
