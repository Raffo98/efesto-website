<?php
// Debug temporaneo
error_log("PHP file eseguito correttamente.");

// Disabilita la visualizzazione di errori e messaggi non richiesti
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(0);

// Imposta l'intestazione per indicare che restituisci JSON
header('Content-Type: application/json');

// Restituisci la chiave API in formato JSON
echo json_encode(['apiKey' => 'patCM8D5baOqqcCSZ.c7b82e6ce5704b660788d97f3864a2e6626a28e76e14540e68f1597d023497e5']);
