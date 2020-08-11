// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7pjt7v00ijmqujf58orad0207l",     // CognitoClientID
  "api_base_url": "https://v4llqhqtr2.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-todo-stack.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1a6sypddjko2w.amplifyapp.com"                                      // AmplifyURL
};

export default config;

