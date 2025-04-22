# Jaak Full Integration React App

A React application that integrates with Jaak.ai's document detector component for document scanning and detection.

## Features

- Document scanning and detection using camera or file upload
- Customizable UI with translation support
- Event-driven results handling

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage

The main component is `DocumentDetector` which provides:

- Camera-based document scanning
- File upload option
- Real-time document detection feedback

### Configuration

The document detector can be configured with these options:

```javascript
{
  key: 'YOUR_API_KEY',
  width: '640px',
  height: '480px',
  mode: 'video-camera', // or 'file-upload'
  placeholder: 'Upload your document',
  buttonText: 'Upload',
  size: 2048, // max file size in KB
  translate: {
    front: 'Acerca el documento',
    back: 'Acerca el reverso del documento',
    changeSide: 'Voltea tu documento',
    adjustAngle: 'Rota tu documento',
    cameraFeedbackBlur: 'Mantén la cámara estable'
  },
  documentDetect: true
}
```

### Events

The component emits a `results` event when document processing is complete:

```javascript
documentDetector.addEventListener('results', (event) => {
  console.log('Detection results:', event.detail);
});
```

## Dependencies

- React
- @jaak.ai/document-detector

## License

[MIT](LICENSE)
