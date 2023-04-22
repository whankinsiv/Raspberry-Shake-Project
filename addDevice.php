<?php
$deviceName = $_GET['deviceName'];
$ipAddress = $_GET['ipAddress'];
$username = $_GET['username'];
$password = $_GET('password');
$latitude = $_GET('latitude');
$longitude = $_GET('longitude');
$altitude = $_GET('altitude');

// Create an SSH connection to the remote server
$ssh = ssh2_connect($ipAddress, 22);
if (!$ssh) {
  die('Unable to establish SSH connection');
}

// Authenticate with the server using the provided credentials
if (!ssh2_auth_password($ssh, $username, $password)) {
  die('Unable to authenticate with the remote server');
}


// Run a command on the remote server to check if the firmware exists
$command = 'ls /opt/firmware | grep sendData.py';
$stream = ssh2_exec($ssh, $command);
stream_set_blocking($stream, true);
$output = stream_get_contents($stream);

// Check the output to see if the firmware was found
if (strpos($output, 'sendData.py') !== false) {
    // Device information correct & includes firmware
    // Insert the device into the database here
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

} else {
    // Valid device information but no firmware detected
    echo (-1);
}

// Close the SSH connection
ssh2_exec($ssh, 'exit');
ssh2_disconnect($ssh);
?>
