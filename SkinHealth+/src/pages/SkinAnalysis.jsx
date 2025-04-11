import React, { useState } from "react";
import * as tmImage from "@teachablemachine/image";

const SkinAnalysis = () => {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  const MODEL_URL = "https://teachablemachine.withgoogle.com/models/dQ-9-BQTV/";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(file);
      setPreviewURL(imageURL);
      setPredictions([]);
    }
  };

  const analyzeImage = async () => {
    if (!image) return;
    setLoading(true);

    const modelURL = MODEL_URL + "model.json";
    const metadataURL = MODEL_URL + "metadata.json";

    const model = await tmImage.load(modelURL, metadataURL);

    const img = document.getElementById("uploaded-image");
    const prediction = await model.predict(img);

    setPredictions(prediction);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-2 text-center">
        Unlock Your Skin’s Story
      </h1>
      <p className="text-gray-600 text-center max-w-xl mb-10">
        Upload a clear image of your skin and let our AI model provide a quick and intelligent analysis to detect common conditions.
      </p>

      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
          <label className="block mb-4 text-lg font-medium text-gray-700">
            Upload your skin image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
          {previewURL && (
            <img
              id="uploaded-image"
              src={previewURL}
              alt="Uploaded"
              className="mt-6 w-64 h-64 object-cover rounded-xl border shadow"
            />
          )}
          {image && (
            <button
              onClick={analyzeImage}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Analyzing..." : "Analyze Image"}
            </button>
          )}
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Prediction Results</h2>
          {predictions.length > 0 ? (
            <div className="space-y-3">
              {predictions.map((p, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm"
                >
                  <span className="font-medium text-gray-700">{p.className}</span>
                  <span className="font-semibold text-blue-600">
                    {(p.probability * 100).toFixed(2)}%
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              Upload a photo and click "Analyze" to view prediction results.
            </p>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-8 text-center max-w-md">
        🔒 Your photo is not stored or shared. All analysis is done securely in your browser.
      </p>
    </div>
  );
};

export default SkinAnalysis;
