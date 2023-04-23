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

    var longitudeError = document.getElementById("longitudeError");
    var latitudeError = document.getElementById("latitudeError");
    var passwordError = document.getElementById("passwordError");
    var usernameError = document.getElementById("usernameError");
    var ipError = document.getElementById("ipError");
    var nameError = document.getElementById("nameError");
    var altitudeError = document.getElementById("altitudeError")

    if (deviceName != '') {
        nameError.textContent = '';
        if (ipAddress != '') {
            ipError.textContent = '';
            if (userName != '') {
                usernameError.textContent = '';
                if (password != '') {
                    passwordError.textContent = '';
                    if ((latitude <= 90) && (latitude >= -90) && (latitude != '')) {
                        latitudeError.textContent = '';
                        if ((longitude <= 180) && (longitude >= -180) && (longitude != '')) {
                            longitudeError.textContent = '';
                            if (altitude != null) {
                                altitudeError.textContent = '';
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
                                //Invalid altitude
                                altitudeError.textContent = 'Please enter the altitude.'
                            }
                        } else {
                            //Invalid longitude
                            longitudeError.textContent = 'Invalid longitude. (-180 - 180)';
                        }
                    } else {
                        //Invalid latitude
                        latitudeError.textContent = 'Invalid latitude. (-90 - 90)';
                    }
                } else {
                    //Invalid password
                    passwordError.textContent = 'Please enter a password.';
                }
            } else {
                //Invalid username
                usernameError.textContent = 'Please enter a device username.';
            }

        } else {
            //Invalid ip address
            ipError.textContent = 'Please enter the device IP address.';
        }
    } else {
        //Invalid device name
        nameError.textContent = 'Please enter a device name.';
    }
}