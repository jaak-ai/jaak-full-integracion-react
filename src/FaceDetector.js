import React, { useState, useEffect, useRef } from 'react';
import { defineCustomElements } from '@jaak.ai/face-detector/loader';
import { defineCustomElements as defineFaceDetector } from '@jaak.ai/face-detector/loader';
const FaceDetector = () => {
	const [status, setStatus] = useState('');
	const [error, setError] = useState(null);
	const [fileResult, setFileResult] = useState(null);
	
    const faceDetectorRef = useRef(null);

	useEffect(() => {
		defineCustomElements(window);
        defineFaceDetector(window);

		if (faceDetectorRef.current) {
            console.log('faceDetectorRef.current', faceDetectorRef.current.config);
			faceDetectorRef.current.config = {
				width: '640px',
				height: '480px',
				enableMicrophone: false,
				mode: 'video-camera',
				placeholder: 'Upload your image',
				buttonText: 'Upload File',
				documentAccept: 'image/*',
				description: 'Please upload an image for face detection',
				size: 2048,
				videoDuration: 5,
			};

			//Añade los eventos que deseas escuchar como:
			// * fileResult
			// * status
			// * componentError
			// * faceDetectionMessage

			// Obtención del elemento face-detector a través de la referencia
			const faceDetector = faceDetectorRef.current;

            console.log('faceDetector', faceDetector);
            setTimeout(() => {
                console.log('faceDetectorRef.mode', faceDetectorRef.current.config.mode);
            }, 3000);

			// Escucha el evento fileResult
			faceDetector.addEventListener('fileResult', (event) => {
				console.log('Base64 ->', event.detail);
				handleFileResult(event);
			});

			// Escucha otros eventos 👇

			faceDetector.addEventListener('status', (event) => {
				//console.log('Status ->', event.detail);
				handleStatusChange(event);
			});

			faceDetector.addEventListener('componentError', (event) => {
				//console.log('componentError ->', event.detail);
				handleError(event);
			});

		}
	}, []);

	const handleStatusChange = (event) => {
		setStatus(event.detail);
	};

	const handleError = (event) => {
		setError(event.detail);
	};

	const handleFileResult = (event) => {
		setFileResult(event.detail);
	};

	return (
		<div>
			<face-detector id="faceDetector" ref={faceDetectorRef}></face-detector>

			<div>Status: {status}</div>
			<div>Error: {error && error.label}</div>
			<div>File Result: {fileResult && fileResult.base64}</div>
		</div>
	);
};

export default FaceDetector;
