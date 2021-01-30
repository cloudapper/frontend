import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: 'http://192.168.178.220/auth/',
  realm: 'master',
  clientId: 'webClient',
});

export default keycloak;