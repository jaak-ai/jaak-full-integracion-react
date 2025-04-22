import React, { useRef, useEffect } from 'react';
import { defineCustomElements } from '@jaak.ai/document-detector/loader';

defineCustomElements();

const DocumentDetector = () => {
	const documentDetectorRef = useRef(null);

	useEffect(() => {
		if (documentDetectorRef.current) {
			documentDetectorRef.current.config = {
				key: 'YOUR_LICENSE_KEY',
				width: '640px',
				height: '480px',
				mode: 'video-camera',
				placeholder: 'Upload your document',
				buttonText: 'Upload',
				size: 2048,
				translate: {
					front: 'Acerca el documento',
					back: 'Acerca el reverso del documento',
					changeSide: 'Voltea tu documento',
					adjustAngle: 'Rota tu documento',
					cameraFeedbackBlur: 'Mantén la cámara estable',
				},
				documentDetect: true,
			};

			const documentDetector = documentDetectorRef.current;

			// Escucha el evento results
			documentDetector.addEventListener('results', (event) =>
				console.log('result ->', event.detail)
			);
		}
	}, []);

	return (
		<>
			<div>
				<document-detector ref={documentDetectorRef}></document-detector>
			</div>
		</>
	);
};

export default DocumentDetector;
