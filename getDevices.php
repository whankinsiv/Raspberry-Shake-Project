<?php
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

$query = "SELECT deviceId, deviceName, longitude, latitude FROM Devices";
$result = $conn->query($query);

// Process the result
while ($row = $result->fetch_array()) {
  $data[] = $row;
}
echo json_encode($data);

// Close the connection
mysqli_close($conn);

?>
