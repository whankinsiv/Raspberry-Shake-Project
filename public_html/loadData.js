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
            populateList(devides.length);
        });
}

function populateDashboard(numOfEntries) {
    var deviceDashboard = document.querySelector("deviceDashboard");

    for (let i = 0; i < numOfEntries; i++) {
        // Create a new div for each device
        var deviceDiv = document.createElement("div");
        deviceDiv.id = "deviceEntry-" + i;

        // Create a header for the device
        var deviceHeader = document.createElement("h2");
        deviceHeader.textContent = devices[i]["deviceName"];
        deviceDiv.appendChild(deviceHeader);

        // Create a paragraph for some dynamic text
        var dynamicText = document.createElement("p");
        dynamicText.textContent = "This device is located at " + devices[i]["location"] + " and has a status of " + devices[i]["status"];
        deviceDiv.appendChild(dynamicText);

        // Create a div for the Google Map
        var mapDiv = document.createElement("div");
        mapDiv.style.width = "500px";
        mapDiv.style.height = "300px";
        deviceDiv.appendChild(mapDiv);

        // Create the Google Map
        var map = new google.maps.Map(mapDiv, {
            center: { lat: devices[i]["latitude"], lng: devices[i]["longitude"] },
            zoom: 12
        });

        // Add the device entry to the dashboard
        deviceDashboard.appendChild(deviceDiv);
    }
}


function populateList(numOfEntries) {
    for (let i = 0; i < numOfEntries; i++) {
        var deviceDashboard = document.querySelector("deviceListMain");
        // Create a new div for each device

        deviceDashboard.innerHTML += `
            <div id="deviceListEntry">${devices[i]["deviceName"]}</div>
        `
    }
}
