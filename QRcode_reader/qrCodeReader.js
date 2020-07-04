// Get the qrcode from window
const qrcode1 = window.qrcode;

// Handles the images coming from the camera
const video = document.createElement("video");

// Draw images coming in the camera
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");

// Output results
const qrResult = document.getElementById("qr-result");
const outputData = document.getElementById("outputData");
const btnScanQR = document.getElementById("btn-scan-qr");

// status of scanner
let scanning = false;

// callback for QR code reader. It is called by the libary when it detects a QR code. "res" contains the result of the scan.
qrcode1.callback = (res) => {
	if(res) {
		//Put text in the span tag of id=outputData
		outputData.innerText = res;
		// Scanning is false because we have already scanned the QRcode and dont want to scan anymore.
		scanning = false;

		// Stop streaming the user's camera by stopping each track one by one.
		video.srcObject.getTracks().forEach(track => {
			track.stop();
		});

		// Display to show user the results.
		qrResult.hidden = false;
		btnScanQR.hidden = false;
		// Don't need this anymore since code was already scanned
		canvasElement.hidden = true;
	}
};

// Handling the camera feed
btnScanQR.onclick = () => {

	// Make browser ask the user for permission to use camera from navigator object.
	// getUserMedia takes an object as parameter. FacingMode: enviroment is the back camera of a phone
	navigator.mediaDevices
		.getUserMedia({ video: {
			facingMode: "environment"
		}})
		// when accepted, stream to the srcObject of the video element.
		.then(function(stream) {
			scanning = true;
			qrResult.hidden = true;
			btnScanQR.hidden = true;
			canvasElement.hidden = false;
			// playsinline prevents the iOS safari from going fullscreen
			video.setAttribute("playsinline", true);
			video.srcObject = stream;
			video.play();
			// tick draws the stream every frame and scan triggers the algorithm
			tick();
			scan();
		});
};

// Set the dimensions of video to the canvas.
function tick() {
  canvasElement.height = video.videoHeight;
  canvasElement.width = video.videoWidth;
  canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
  // pass the tick function so it can be called again and draw the next frame while scanning == true.
  scanning && requestAnimationFrame(tick);
}

function scan() {
  try {
  	// run decode from qrcode library that looks for a canvas with id: "qr-canvas". If can't find it, throw error
    qrcode1.decode();
  } catch (e) {
    setTimeout(scan, 300);
  }
};