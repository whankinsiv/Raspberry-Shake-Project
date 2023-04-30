function loadDevice() {
    console.log("Device Info from DB");
    fetch('/getDevices.php')
        .then(response => response.json())
        .then(data => {

            // Set Global variable for all found devices. 
            devices = data;

            // Populate device dashboard with devices
            populateList(devices.length);
            loadDeviceInfo();
        });
}

function loadDeviceInfo() {
    
    // get device based on URL
    var queryString = window.location.search;

    // Parse the query string into a URLSearchParams object
    var searchParams = new URLSearchParams(queryString);

    // Get the value of the "deviceId" parameter
    var deviceID = searchParams.get("deviceId");
    
    console.log(deviceID);
    console.log(devices);
    
    // Set device
    var device = devices.find(function(d) {
        return d[0] === deviceID;
    });
    console.log(device);
    
    // Populate device name
    var deviceNameDiv = document.getElementById("deviceName");
    deviceNameDiv.innerHTML = device.deviceName;
    
    // Populate device lattitude & longitude
    var deviceInfoDiv = document.getElementById("device-info");
    
    deviceInfoDiv.innerHTML += `
        <div id="deviceLatitude">Latitude: ${device.latitude} </div>
        <div id="deviceLongitude">Longitude: ${device.longitude}</div>
        <div id="deviceAltitude">Altitude: ` +  device.altitude + `</div>
    `;
    
    
}

function populateList(numOfEntries) {
    for (let i = 0; i < numOfEntries; i++) {
        var deviceList = document.getElementById("deviceListMain");
        // Create a new div for each device

        deviceList.innerHTML += `
            <div class= "map" id="deviceListEntry" onclick="showDevice(${devices[i]["deviceId"]})">${devices[i]["deviceName"]}</div>
        `;
    }
    deviceList.innerHTML += `
            <div id="deviceListEntry" onClick="addDevicePushed()">Add New Device</div>
        `;
}

function showDevice(deviceId) {
    console.log("Go to next page");
    var link = "showDevice.html?deviceId=" + deviceId;
    window.location.href = link
}

function returnHome() {
    var link = "https://databasemls.online";
    window.location.href = link;
}
