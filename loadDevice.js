function loadDevice() {
    console.log("Device Info from DB");
    fetch('/getDevices.php')
        .then(response => response.json())
        .then(data => {

            // Set Global variable for all found devices. 
            devices = data;

            // Populate device dashboard with devices
            populateList(devices.length);
        });
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
