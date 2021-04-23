import * as lambda from '@aws-cdk/aws-lambda';
import {NodejsFunction} from '@aws-cdk/aws-lambda-nodejs';
import * as cdk from '@aws-cdk/core';
import * as path from 'path';

export class CdkStarterStack extends cdk.Stack {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myFunction = new NodejsFunction(this, id, {
      // setting environment variables 👇
      environment: {
        region: cdk.Stack.of(this).region,
        availabilityZones: JSON.stringify(cdk.Stack.of(this).availabilityZones),
        myEnvVariable: 'some value',
      },
      runtime: lambda.Runtime.NODEJS_14_X,
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      handler: 'main',
      entry: path.join(__dirname, `/../src/my-function/index.js`),
    });
  }
}
