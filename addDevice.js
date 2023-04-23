function addDevicePushed() {
    var addDevicePopup = document.getElementById("addDevicePopup");
    addDevicePopup.classList.add('active');
}

function closeAddDevicePopup() {
    var addDevicePopup = document.getElementById("addDevicePopup");
    addDevicePopup.classList.remove('active');
}

async function submitForm() {
    var deviceName = document.getElementById("deviceName").value;
    var ipAddress = document.getElementById("ipAddress").value;
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longitude").value;
    var altitude = document.getElementById("altitude").value;

    var ssh = new SSH2Prommise({
        host: ipAddress,
        username: userName,
        password: password
    });

    var script = "/addDevice.php?deviceName="
        + encodeURIComponent(deviceName)
        + "&ipAddress="
        + encodeURIComponent(ipAddress)
        + "&userName="
        + encodeURIComponent(userName)
        + "&password="
        + encodeURIComponent(password)
        + "&latitude="
        + encodeURIComponent(latitude)
        + "&longitude="
        + encodeURIComponent(longitude)
        + "&altitude="
        + encodeURIComponent(altitude);

    var response = await fetch(script);
    console.log(response);
}