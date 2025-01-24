<?php
$log_message = "Questo è un messaggio PHP";
echo "<script>console.log('PHP Log: " . addslashes($log_message) . "');</script>";
?>


<?php
header('Content-Type: application/json'); // Indica che restituisci JSON
echo json_encode(['apiKey' => 'patCM8D5baOqqcCSZ.c7b82e6ce5704b660788d97f3864a2e6626a28e76e14540e68f1597d023497e5']);
?>
