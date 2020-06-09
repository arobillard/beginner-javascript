const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const facCtx = faceCanvas.getContext('2d');

// Make face detector

const faceDetector = new FaceDetector();
console.log(video, canvas, faceCanvas, faceDetector);

// write a function that will populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {width: 1200, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // size canvas
  console.log(video.videoWidth, video.videoHeight)
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  console.log(faces);
}

populateVideo().then(detect);
