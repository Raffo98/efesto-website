console.log("we")

const config = {
    // Uses the PORT variable declared here, the path is defined in code
    port: 8080,
    redirectUri: 'http://localhost:8080/',
    clientId: "91ab5d0b-d989-4e6e-9784-c7d161dd72d0",
    // If you're not using a client secret, set to the empty string: ""
    clientSecret: "",
    airtableUrl: 'https://www.airtable.com',
    // space delimited list of Airtable scopes, update to the list of scopes you want for your integration
    scope: 'data.records:read',
};
module.exports = config;