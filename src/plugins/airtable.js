var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'patwmZOBUtrlsPwcH.2e72b7bf7dc6c242716d2537f05c7c7e70a051083160509f2f490619f192a3ce'
});
var base = Airtable.base('appVMoyb4khjMiISW');

export default {
    base
}