// Callback to run when data is ready
function reqListener() {
  // Parse the JSON text to an object so we can get just one property
  var data = JSON.parse(this.responseText);
  // Append that value to the DOM.
  document.querySelector("#totaldata").innerHTML = (Math.round(data.bytesProxied / 1000000000).toFixed(2));
  document.querySelector("#sessions").innerHTML = data.numActiveSessions;
  document.querySelector("#connections").innerHTML = data.numConnections;
  document.querySelector("#uptime").innerHTML = (Math.round(data.uptimeSeconds/3600).toFixed(0));
  
}

// Create a new ajax requst
var oReq = new XMLHttpRequest();
// Fire callback on load event
oReq.addEventListener("load", reqListener);
// Create the connection to our API
oReq.open("GET", "http://116.203.107.188:22070/status");
// Fire the request
oReq.send();