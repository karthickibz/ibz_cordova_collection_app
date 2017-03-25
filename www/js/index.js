var app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function() {
    // this.receivedEvent('deviceready');
    document.getElementById("dialogAlert").addEventListener("click", dialogAlert);
	document.getElementById("dialogConfirm").addEventListener("click", dialogConfirm);
	document.getElementById("dialogPrompt").addEventListener("click", dialogPrompt);
	document.getElementById("dialogBeep").addEventListener("click", dialogBeep);
	function dialogAlert() {
   		var message = "I am Alert Dialog!";
   		var title = "ALERT";
   		var buttonName = "Alert Button";
	
   		navigator.notification.alert(message, alertCallback, title, buttonName);

   	function alertCallback() {
      console.log("Alert is Dismissed!");
   	}
	
	}
	function dialogConfirm() {
   		var message = "Am I Confirm Dialog?";
   		var title = "CONFIRM";
   		var buttonLabels = "YES,NO";
	
   		navigator.notification.confirm(message, confirmCallback, title, buttonLabels);

   	function confirmCallback(buttonIndex) {
      console.log("You clicked " + buttonIndex + " button!");
   	}
	
	}
	function dialogPrompt() {
   		var message = "Am I Prompt Dialog?";
   		var title = "PROMPT";
   		var buttonLabels = ["YES","NO"];
   		var defaultText = "Default"
	
   		navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);

   	function promptCallback(result) {
      console.log("You clicked " + result.buttonIndex + " button! \n" + 
         "You entered " +  result.input1);
   	}
	
	}
	function dialogBeep() {
   		var times = 2;
   		navigator.notification.beep(times);
	}
	document.getElementById("cordovaDevice").addEventListener("click", cordovaDevice);
	function cordovaDevice() {
   		alert("Cordova version: " + device.cordova + "\n" +
      "Device model: " + device.model + "\n" +
      "Device platform: " + device.platform + "\n" +
      "Device UUID: " + device.uuid + "\n" +
      "Device version: " + device.version);
	}
	document.getElementById("getPosition").addEventListener("click", getPosition);
	document.getElementById("watchPosition").addEventListener("click", watchPosition);
	function getPosition() {

   		var options = {
      		enableHighAccuracy: true,
      		maximumAge: 3600000
   		}
	
   		var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   	function onSuccess(position) {

      	alert('Latitude: '          + position.coords.latitude          + '\n' +
         	'Longitude: '         + position.coords.longitude         + '\n' +
         	'Altitude: '          + position.coords.altitude          + '\n' +
         	'Accuracy: '          + position.coords.accuracy          + '\n' +
         	'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         	'Heading: '           + position.coords.heading           + '\n' +
         	'Speed: '             + position.coords.speed             + '\n' +
         	'Timestamp: '         + position.timestamp                + '\n');
   	};

   	function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   	}
	}

	function watchPosition() {

   		var options = {
      		maximumAge: 3600000,
      		timeout: 3000,
      		enableHighAccuracy: true,
   		}

   		var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

   	function onSuccess(position) {

      	alert('Latitude: '          + position.coords.latitude          + '\n' +
         	'Longitude: '         + position.coords.longitude         + '\n' +
         	'Altitude: '          + position.coords.altitude          + '\n' +
         	'Accuracy: '          + position.coords.accuracy          + '\n' +
         	'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         	'Heading: '           + position.coords.heading           + '\n' +
         	'Speed: '             + position.coords.speed             + '\n' +
         	'Timestamp: '         + position.timestamp                + '\n');
   	};

   	function onError(error) {
      	alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
   	}

	}
  }
};

app.initialize();