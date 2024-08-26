import { APIGatewayProxyHandler } from 'aws-lambda';
import { processData } from '../services/data-service';
import { logInfo } from '../utils/logger';

export const handler: APIGatewayProxyHandler = async (event) => {
  logInfo('Processing data...');
  const inputData = JSON.parse(event.body || '{}');
  const result = await processData(inputData);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Data processed successfully!', result }),
  };
};
