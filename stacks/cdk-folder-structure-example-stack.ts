import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Runtime, Code, LayerVersion } from 'aws-cdk-lib/aws-lambda';
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';

export class CdkFolderStructureExampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const layer = new LayerVersion(
      this,
      "Layer",
      {
        code: Code.fromAsset("src/layers"),
        compatibleRuntimes: [ Runtime.NODEJS_LATEST ],
        layerVersionName: "NodeJsLayer"
      }
    )

    // Define the Lambda function
    const processDataFunction = new Function(this, 'ProcessDataFunction', {
      runtime: Runtime.NODEJS_LATEST,
      handler: 'lambdas/process-data.handler',
      code: Code.fromAsset('dist/src'),
      environment: {
        LOG_LEVEL: 'INFO',
      },
      layers: [
        layer
      ],
    });

    // Define the API Gateway
    const api = new RestApi(this, 'ProcessDataApi', {
      restApiName: 'Process Data Service',
      description: 'This service processes data using a Lambda function.',
    });

    // Create an API Gateway resource and method for the Lambda function
    const processDataIntegration = new LambdaIntegration(processDataFunction);
    api.root.addResource('data').addMethod('POST', processDataIntegration);
  }
}
