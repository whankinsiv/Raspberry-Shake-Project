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
        newDiv.innerHTML = `
         <h2>${devices[i]["deviceName"]}</h2>
         <p>${devices[i]["longitude"]}, ${devices[i]["latitude"]}</p>
        `;
  
        // Add the new div to the deviceListMain element
        deviceDashboard.appendChild(newDiv);
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
