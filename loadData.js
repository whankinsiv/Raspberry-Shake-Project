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
    var deviceDashboard = document.getElementById("deviceDashboard");

    for (let i = 0; i < numOfEntries; i++) {
        // Create a new div for each device
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "deviceDashboardEntry");
        newDiv.setAttribute("onclick", "showDevice('" + devices[i][deviceId] + "')");
        newDiv.innerHTML = `
         <h2>${devices[i]["deviceName"]}</h2>
         <div class="map" id="map${i}"></div>
         <p>${devices[i]["longitude"]}, ${devices[i]["latitude"]}</p>
        `;

        // Add the new div to the deviceListMain element
        deviceDashboard.appendChild(newDiv);
        createMap(devices[i]["latitude"], devices[i]["longitude"], `map${i}`);
    }
}

function showDevice(deviceId) {
    var link = "showDevice.html?deviceId=" + deviceId;
    window.location.href = link
}

function createMap(latitude, longitude, mapDiv) {
    var map = tt.map({
        key: 'EVYA5y9tR2nwLASDZBMCtaE844hCfrTT',
        container: mapDiv

    });

    var center = [longitude, latitude];
    map.setCenter(center);
    map.setZoom(14);

    var marker = new tt.Marker().setLngLat(center).addTo(map);
}


function populateList(numOfEntries) {
    for (let i = 0; i < numOfEntries; i++) {
        var deviceList = document.getElementById("deviceListMain");
        // Create a new div for each device

        deviceList.innerHTML += `
            <div class= "map" id="deviceListEntry">${devices[i]["deviceName"]}</div>
        `;
    }
    deviceList.innerHTML += `
            <div id="deviceListEntry" onClick="addDevicePushed()">Add New Device</div>
        `;
}
