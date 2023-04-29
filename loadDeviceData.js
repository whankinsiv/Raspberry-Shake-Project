<script>
window.onload = function() {
  // Get the device ID from the query string
  var deviceId = getParameterByName('deviceId');
  
  // Make an AJAX request to the PHP script
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'your_php_script.php?deviceId=' + deviceId, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Parse the JSON response
      var data = JSON.parse(xhr.responseText);
      
      // Do something with the data
      console.log(data);
    } else {
      console.log('Error: ' + xhr.statusText);
    }
  };
  xhr.onerror = function() {
    console.log('Error: ' + xhr.statusText);
  };
  xhr.send();
}

// Helper function to get a parameter from the query string
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
</script>
