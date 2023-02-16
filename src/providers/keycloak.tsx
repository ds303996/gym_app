import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8090",
    realm: "gym_service",
    clientId: "gym-app-client"
});

export default keycloak;