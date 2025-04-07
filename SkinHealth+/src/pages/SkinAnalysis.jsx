import { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { analyzeImage, loadModel } from "../ai/model";

const getAdvice = (condition) => {
  const advice = {
    "Healthy Skin": "Maintain a balanced diet and proper skincare.",
    "Acne": "Use oil-free skincare products and wash your face twice daily.",
    "Eczema": "Moisturize frequently and avoid harsh soaps.",
    "Psoriasis": "Consult a dermatologist for medication and avoid stress.",
  };
  return advice[condition] || "Consult a skin specialist for an accurate diagnosis.";
};

const SkinAnalysis = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState([]);
  const webcamRef = useRef(null);

  useEffect(() => {
    loadModel(); // Load AI model on component mount
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        setImage(img); // Store as ImageElement for processing
      };
    };
    reader.readAsDataURL(file);
  };

  const captureImage = () => {
    const screenshot = webcamRef.current.getScreenshot();
    const img = new Image();
    img.src = screenshot;
    img.onload = () => {
      setImage(img); // Ensure image is in correct format
    };
  };

  const analyzeSkin = async () => {
    if (!image) return;
    const predictions = await analyzeImage(image);
    setResult(predictions);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Skin Health Analysis</h2>

      <input type="file" onChange={handleFileUpload} className="my-4 p-2 border border-gray-300 rounded" />
      <Webcam ref={webcamRef} screenshotFormat="image/png" className="my-4 border-2 border-gray-300 rounded" />
      <button onClick={captureImage} className="bg-blue-500 px-6 py-3 text-white rounded-full mb-4 hover:bg-blue-600">
        Capture from Webcam
      </button>

      {image && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Preview:</h3>
          <img src={image.src} alt="Uploaded" className="mt-2 max-w-xs border border-gray-300 rounded" />
        </div>
      )}

      <button onClick={analyzeSkin} className="bg-green-500 px-6 py-3 text-white rounded-full mb-4 hover:bg-green-600">
        Analyze Skin
      </button>

      {result.length > 0 && (
        <div className="mt-6 w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Predictions:</h3>
          {result.map((res, index) => (
            <div key={index} className="mb-4 p-4 border-b border-gray-200">
              <p className="text-lg font-semibold text-gray-800">{res.className} - {Math.round(res.probability * 100)}%</p>
              <p className="text-sm text-gray-600 mt-2">{getAdvice(res.className)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkinAnalysis;
