// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html
import {
    SecretsManagerClient,
    GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const secret_name = "discord-bot";

const client = new SecretsManagerClient({
    region: "us-east-1",
});

let response;

try {
    response = await client.send(
        new GetSecretValueCommand({
            SecretId: secret_name,
            VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
        })
    );
} catch (error) {
    // For a list of exceptions thrown, see
    // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    throw error;
}

const secretstring = response.SecretString;
export const discord_token = JSON.parse(secretstring)["DISCORD-TOKEN"]
export const discord_prefix = JSON.parse(secretstring)["PREFIX"]


// module.exports = {
//     discord_token: JSON.parse(secretstring)["DISCORD-TOKEN"],
//     discord_prefix: JSON.parse(secretstring)["PREFIX"]
// }