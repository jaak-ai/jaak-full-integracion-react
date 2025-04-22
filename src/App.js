import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import DocumentDetector from './DocumentDetector';
import FaceDetector from './FaceDetector';
import VideoRecorder from './VideoRecorder';


function App() {
    const [currentComponent, setCurrentComponent] = useState("DocumentDetector");

    const renderComponent = () => {
        switch (currentComponent) {
            case "DocumentDetector":
                return <DocumentDetector />;
            case "FaceDetector":
                return <FaceDetector />;
            case "VideoRecorder":
                return <VideoRecorder />;
            default:
                return null;
        }
    };

    return (
        <div className="App">
            {renderComponent()}
            <div style={{ marginTop: "20px" }}>
                <button onClick={() => setCurrentComponent("DocumentDetector")}>
                    Ir a DocumentDetector
                </button>
                <button onClick={() => setCurrentComponent("FaceDetector")}>
                    Ir a FaceDetector
                </button>
                <button onClick={() => setCurrentComponent("VideoRecorder")}>
                    Ir a VideoRecorder
                </button>
            </div>
        </div>
    );
}


/*
function App() {
    return (
        <div className="App">
            <FaceDetector />
        </div>
    );
}
*/



export default App;
