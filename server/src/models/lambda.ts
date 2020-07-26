export interface ApiRequest {
  body: any;
  headers: any;
  httpMethod: 'GET' | 'POST' | 'DEL' | 'PUT';
  path: string;
  pathParameters: any;
  queryStringParameters: any;
}
