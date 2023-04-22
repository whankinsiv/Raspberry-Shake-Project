function addDevicePushed() {
    var addDevicePopup = document.getElementById("addDevicePopup");
    addDevicePopup.classList.add('active');
}

function closeAddDevicePopup() {
    var addDevicePopup = document.getElementById("addDevicePopup");
    addDevicePopup.classList.remove('active');
}