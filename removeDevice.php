<?php
$deviceId = $_GET['deviceId'];

$servername = "localhost";
$database = "u215124131_ERP";
$username = "u215124131_admin";
$password = "Password1234";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . mysqli_connect_error());
}

$query = "DELETE FROM Devices WHERE deviceId = '$deviceId'";
if ($conn->query($query) === TRUE) {
  echo "Device deleted successfully";
} else {
  echo "Error deleting device: " . $conn->error;
}

// Close the connection
mysqli_close($conn);

?>
