# Realm of The Kings Bot

## How to Deploy and Test Locally

### Prerequisites 
1. Access to the correct AWS Account
2. AWS API Key credentials 
3. Docker installed locally

### Getting the Docker image built and running
1. Store you AWS credentials in the default location for your device (Mac is ~/.aws/credentials) https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html
2. run "docker built -t rotk_bot /path/to/project/root"
3. run "docker run --env-file ~/.aws/credentials rotk_bot"

To run in detached mode, add "-d" to command #3.
To see logs of a detached container, run "docker logs -f {container-id}"

