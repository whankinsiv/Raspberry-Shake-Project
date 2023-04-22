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

$deviceName = $_GET['deviceName'];
$ipAddress = $_GET['ipAddress'];
$username = $_GET['username'];
$password = $_GET['password'];
$latitude = $_GET['latitude'];
$longitude = $_GET['longitude'];
$altitude = $_GET['altitude'];

// Get the current listing id's and asking prices
$query = "INSERT INTO Devices (deviceName, ipAddress, username, password, latitude, longitude, altitude) VALUES ('$deviceName', '$ipAddress', '$username', '$password', '$latitude', '$longitude', '$altitude')";
$result = mysqli_query($conn, $query);

// Check if query was successful
$rowsAffected = mysqli_affected_rows($conn);
echo ($rowsAffected);

// Close the connection
mysqli_close($conn);

?>