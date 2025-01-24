// var Airtable = require('airtable');
// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: 
// });
// var base = Airtable.base('appVMoyb4khjMiISW');

// export default {
//     base
// }


var Airtable = require('airtable');

async function configureAirtable() {
  try {
    // Effettua una richiesta al file PHP
    const response = await fetch('/get-api-key.php'); // Assumi che sia nella root del server
    console.log("AOOOO", response.json);
    
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Estrarre la chiave API dal JSON restituito dal PHP
    const { apiKey } = await response.json();

    // Configura Airtable con la chiave API
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: apiKey,
    });

    // Crea l'istanza della base
    var base = Airtable.base('appVMoyb4khjMiISW');
    return base;
  } catch (error) {
    console.error('Errore nella configurazione di Airtable:', error);
  }
}

// Configura Airtable all'avvio
(async () => {
  var base = await configureAirtable();

  // Puoi ora usare `base` per interagire con Airtable
  console.log(base);
})();
