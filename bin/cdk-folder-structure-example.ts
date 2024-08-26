#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkFolderStructureExampleStack } from '../stacks/cdk-folder-structure-example-stack';

const app = new cdk.App();
new CdkFolderStructureExampleStack(
  app,
  'CdkFolderStructureExampleStack'
);