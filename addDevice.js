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

    if ((latitude < 90) && (latitude > -90)) {
        latitudeError.textContent = '';
        if ((longitude < 180) && (longitude > -180)) {
            longitudeError.textContent = '';
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
            location.reload();
        } else {
            //Invalid longitude
            var longitudeError = document.getElementById("longitudeError");
            longitudeError.textContent = 'Invalid longitude (-180 - 180)';

        }
    } else {
        //Invalid latitude
        var latitudeError = document.getElementById("latitudeError")
        latitudeError.textContent = 'Invalid latitude (-90 - 90)';
    }
}