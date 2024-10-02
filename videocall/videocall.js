// Step 1: Access the video/audio stream
const myVideo = document.getElementById('my-video');
const peerVideo = document.getElementById('peer-video');
let localStream;

// Get the output element for recognized gestures
const gestureResult = document.getElementById('gesture-result');

// Function to start video stream
navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
    localStream = stream;
    myVideo.srcObject = stream;

    // Initialize MediaPipe Hands and Gesture Recognition
    initializeHandTracking(stream);

}).catch(error => {
    console.error('Error accessing media devices.', error);
});

// Step 2: Create a Peer instance
const peer = new Peer(); // Create a new peer object

peer.on('open', id => {
    console.log('My PeerJS ID is:', id);
    alert('Your PeerJS ID: ' + id);
});

// Step 3: Call a peer by their ID
document.getElementById('connect-button').addEventListener('click', () => {
    const peerId = document.getElementById('peer-id-input').value;
    
    if (peerId) {
        const call = peer.call(peerId, localStream);
        
        call.on('stream', remoteStream => {
            peerVideo.srcObject = remoteStream;
        });
        
        call.on('error', err => {
            console.error('Call error:', err);
        });
    } else {
        alert('Please enter a valid peer ID.');
    }
});

// Step 4: Answer incoming calls
peer.on('call', call => {
    call.answer(localStream);
    
    call.on('stream', remoteStream => {
        peerVideo.srcObject = remoteStream;
    });

    call.on('error', err => {
        console.error('Call error:', err);
    });
});

// Step 5: MediaPipe Hand tracking and recognition

function initializeHandTracking(stream) {
    // Create MediaPipe Hands instance
    const hands = new Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
        maxNumHands: 2,  // Detect up to 2 hands
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    hands.onResults(onHandResults);

    // Create MediaPipe Camera
    const camera = new Camera(myVideo, {
        onFrame: async () => {
            await hands.send({image: myVideo});
        },
        width: 640,
        height: 480
    });
    camera.start();
}

// Step 6: Handle Hand Results from MediaPipe
function onHandResults(results) {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        // For simplicity, we recognize only basic gestures here (e.g., number of fingers up)
        const landmarks = results.multiHandLandmarks[0];
        
        // Analyze hand landmarks for gesture recognition
        const recognizedGesture = recognizeGesture(landmarks);
        
        // Update the UI with the recognized gesture
        gestureResult.innerText = recognizedGesture;
    } else {
        gestureResult.innerText = "None";  // No gesture recognized
    }
}

// Step 7: Simple Gesture Recognition
function recognizeGesture(landmarks) {
    const thumbIsOpen = landmarks[4].y < landmarks[3].y; // Example: thumb extended
    const indexIsOpen = landmarks[8].y < landmarks[6].y; // Example: index finger extended
    
    if (thumbIsOpen && indexIsOpen) {
        return "Peace Sign ✌️";
    } else if (indexIsOpen && !thumbIsOpen) {
        return "Pointing ☝️";
    } else if (!thumbIsOpen && !indexIsOpen) {
        return "Fist ✊";
    }

    return "Unknown Gesture";
}
