import { auth, iot, mqtt } from "aws-iot-device-sdk-v2";

const credentials = {
  accessKeyId: "",
  secretAccessKey: "",
  sessionToken: "",
};
const region = "us-east-1";
const mqttEndpoint = "asbce-ats.iot.us-east-1.amazonaws.com";
const clientId = "test-" + Math.floor(Math.random() * 100000000);

const config_builder =
  iot.AwsIotMqttConnectionConfigBuilder.new_with_websockets({
    region,
    credentials_provider: auth.AwsCredentialsProvider.newStatic(
      credentials.accessKeyId,
      credentials.secretAccessKey,
      credentials.sessionToken
    ),
  });
config_builder.with_clean_session(false);
config_builder.with_client_id();
config_builder.with_endpoint(mqttEndpoint);

const config = config_builder.build();

console.log(`Connecting ${clientId}...`, config);
const client = new mqtt.MqttClient();
connection = client.new_connection(config);
console.log(connection);
