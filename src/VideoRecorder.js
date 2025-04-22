import React, { useState, useEffect, useRef } from 'react';
import { defineCustomElements } from '@jaak.ai/video-camera/loader';

const VideoRecorder = () => {
	const [streamStatus, setStreamStatus] = useState(null);
	const [error, setError] = useState(null);
	const videoRef = useRef(null);
	useEffect(() => {
		defineCustomElements(window);

		if (videoRef.current) {
			videoRef.current.addEventListener('streamStatus', (event) => {
				console.log('Base64 ->', event.detail);
				handleStreamStatus(event);
			});
		}
	}, []);

	const handleStreamStatus = (event) => {
		setStreamStatus(event.detail);
	};

	const handleError = (event) => {
		setError(event.detail);
	};

    const startRecording = async () => {
        console.log('startRecording');
        await videoRef.current.startRecording();
    };

    const stopRecording = async () => {
        console.log('stopRecording');
        const result = await videoRef.current.stopRecording();
        console.log('videoBase64:', result);
    };

	return (
		<div>
			<video-camera-recorder
				id="videoRecorder"
				ref={videoRef}
				onStreamStatus={handleStreamStatus}
				onComponentError={handleError}
				config={JSON.stringify({
					key: 'sRwCABFtYWluLmZpcm1lbnRpLm5ldAZsZXlKRGNtVmhkR1ZrVDI0aU9qRTNNelkxTkRFek56a3pNaklzSWtOeVpXRjBaV1JHYjNJaU9pSXdNR1ptTURGbFpTMDJNekpqTFRSaU1HRXRaVGd5WmkwMU5UQTBZekV6TjJWaVpETWlmUT09QMgSuCIiEN6L5n6DZFPclV4FRlKQZjpLi7y8FM6TzBxVRtyw0/EoMy4eyQRsNOOGlc6Rok6TnF0JLoi+vdg04X5MMjXFfbonc+1iQOdynS4VJBNO74cB6NtY5EZ5IK1WmV7VdaUvYgfCAxV4aGei8ihXew==',
					width: '640px',
					height: '480px',
					enableMicrophone: true,
					showMessages: true,
					messageDetail: 'Error accessing the camera',
				})}></video-camera-recorder>

			<div>streamStatus: {streamStatus && streamStatus.label}</div>
			<div>Error: {error && error.label}</div>
			<button onClick={() => startRecording()}>Grabar</button>
			<button onClick={() => stopRecording()}>Detener</button>
		</div>
	);
};

export default VideoRecorder;
