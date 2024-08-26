import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { join } from 'path';

export class CdkFolderStructureExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const processDataFunction = new Function(this, 'ProcessDataFunction', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'process-data.handler',
      code: Code.fromAsset(join(__dirname, '../dist/src/lambdas')),
      environment: {
        LOG_LEVEL: 'INFO',
      },
    });

    // Define the API Gateway
    const api = new RestApi(this, 'ProcessDataApi', {
      restApiName: 'Process Data Service',
      description: 'This service processes data using a Lambda function.',
    });

    // Create an API Gateway resource and method for the Lambda function
    const processDataIntegration = new LambdaIntegration(processDataFunction);
    api.root.addMethod('POST', processDataIntegration);
  }
}
