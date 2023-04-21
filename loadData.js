// Global Variable for devices
var devices;

function loadData() {
    console.log("Device Info from DB");
    fetch('/getDevices.php')
        .then(response => response.json())
        .then(data => {

            // Set Global variable for all found devices. 
            devices = data;

            // Populate device dashboard with devices
            populateDashboard(devices.length);
            populateList(devices.length);
        });
}

function populateDashboard(numOfEntries) {
    var deviceDashboard = document.querySelector("deviceDashboard");

    for (let i = 0; i < numOfEntries; i++) {

    }
}


function populateList(numOfEntries) {
    for (let i = 0; i < numOfEntries; i++) {
        var deviceList = document.getElementById("deviceListMain");
        // Create a new div for each device

        deviceList.innerHTML += `
            <div id="deviceListEntry">${devices[i]["deviceName"]}</div>
        `
    }
}
