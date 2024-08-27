# Example CDK Project Folder Structure
This is an example repository to show of my preferred way to set up my AWS CDK projects. This works great for serverless projects.

<!-- Watch on [YouTube](https://www.youtube.com/@cloudmancer) -->

* Update the package.json deploy script to use your profile, or if you don't use profiles, remove the profile flag completely. More info on AWS CLI profiles with the CDK [here](https://www.youtube.com/watch?v=rBcZoeCu-K4).
* Run `npm run deploy`
* Curl your new endpoint `curl -X POST <YOUR_API_GW_URL>/data \
-H "Content-Type: application/json" \
-d '{"key1": "value1", "key2": "value2"}'`

[CI/CD & Multiple Env Deployments Folder Structure - Rehan van der Merwe](https://rehanvdm.com/blog/aws-cdk-starter-configuration-multiple-environments-cicd)
[Alternative Folder Structure - Kevin Lin](https://github.com/kevinslin/open-cdk?tab=readme-ov-file#structure)