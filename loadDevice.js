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
    
    //getDeviceId from URL
    var queryString = window.location.search;

    // Parse the query string into a URLSearchParams object
    var searchParams = new URLSearchParams(queryString);

    // Get the value of the "deviceId" parameter
    var deviceID = parseInt(searchParams.get("deviceId"));
    
    // Populate device name
    var deviceNameDiv = document.getElementById("deviceName");
    deviceNameDiv.innerHTML = devices[deviceID]["deviceName"];
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
