function addDevicePushed() {
    var addDevicePopup = document.getElementById("addDevicePopup");
    addDevicePopup.classList.add('active');
}

function closeAddDevicePopup() {
    var addDevicePopup = document.getElementById("addDevicePopup");
    addDevicePopup.classList.remove('active');
}

function submitForm() {
    var deviceName = document.getElementById("deviceName");
    console.log(deviceName);
    var ipAddress = document.getElementById("ipAddress");
    var userName = document.getElementById("userName");
    var password = document.getElementById("password");
    var latitude = document.getElementById("latitude");
    var longitude = document.getElementById("longitude");
    var altitude = document.getElementById("altitude");

}