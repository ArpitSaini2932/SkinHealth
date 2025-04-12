import React, { useState, useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";

const diseaseInfo = {
  "Mole (Melanocytic Nevus)": {
    description: "A common benign skin growth made up of melanocytes. Usually harmless.",
    cure: "No treatment needed unless the mole changes shape, color, or size. Consult a dermatologist if changes occur."
  },
  "Sun Damage Spot (Actinic Keratosis)": {
    description: "Rough, scaly patches on sun-exposed areas. Precancerous in some cases.",
    cure: "Cryotherapy, topical creams, or laser therapy. Regular check-ups are important."
  },
  "Eczema (Atopic Dermatitis)": {
    description: "Inflammatory skin condition causing dry, itchy, and red patches.",
    cure: "Moisturize regularly, avoid triggers, and use corticosteroid creams if needed."
  },
  "Harmless Skin Growth (Benign Keratosis)": {
    description: "Non-cancerous skin growths that may appear warty or waxy.",
    cure: "Usually no treatment is required. Removal is possible for cosmetic reasons."
  },
  "Hard Skin Bump (Dermatofibroma)": {
    description: "Firm, small nodules on the skin, often from minor injuries or insect bites.",
    cure: "Generally harmless and need no treatment. Surgical removal possible if painful or bothersome."
  },
  "Skin Cancer Mole (Melanoma)": {
    description: "A dangerous form of skin cancer that can spread to other organs.",
    cure: "Early surgical removal is essential. Advanced cases may require immunotherapy or radiation."
  },
  "Skin Cancer (Squamous Cell Carcinoma)": {
    description: "A common skin cancer in sun-exposed areas, may grow and spread.",
    cure: "Surgical removal, topical treatments, or radiation therapy depending on severity."
  },
  "Fungal Infection (Ringworm / Candidiasis / Tinea)": {
    description: "A contagious skin infection caused by fungi. Appears as red, scaly, itchy patches.",
    cure: "Use antifungal creams or powders. Maintain hygiene and avoid sharing personal items."
  },
  "Blood Vessel Spot (Vascular Lesion)": {
    description: "Includes birthmarks and dilated blood vessels. Usually harmless.",
    cure: "No treatment needed. Laser treatment or surgery optional for cosmetic purposes."
  }
};

const SkinAnalysis = () => {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [webcamActive, setWebcamActive] = useState(false);
  const webcamRef = useRef(null);
  const labelContainerRef = useRef(null);
  const [webcamPredictions, setWebcamPredictions] = useState([]);

  const MODEL_URL = "https://teachablemachine.withgoogle.com/models/_TyJ7_uzT/";

  useEffect(() => {
    const loadModel = async () => {
      const modelURL = MODEL_URL + "model.json";
      const metadataURL = MODEL_URL + "metadata.json";
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
    };
    loadModel();
  }, []);

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
    if (!image || !model) return;
    setLoading(true);
    const img = document.getElementById("uploaded-image");
    const prediction = await model.predict(img);
    prediction.sort((a, b) => b.probability - a.probability); 
    setPredictions(prediction);
    setLoading(false);
  };

  const initWebcam = async () => {
    if (!model) return;
    const flip = true;
    const webcam = new tmImage.Webcam(200, 200, flip);
    webcamRef.current = webcam;
    await webcam.setup();
    await webcam.play();
    setWebcamActive(true);
    window.requestAnimationFrame(() => loop(webcam));
    document.getElementById("webcam-container").appendChild(webcam.canvas);
  };

  const loop = async (webcam) => {
    webcam.update();
    await predictWebcam(webcam);
    window.requestAnimationFrame(() => loop(webcam));
  };

  const predictWebcam = async (webcam) => {
    if (!model) return;
    const prediction = await model.predict(webcam.canvas);
    setWebcamPredictions(prediction);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-2 text-center">
        Unlock Your Skin’s Story
      </h1>
      <p className="text-gray-600 text-center max-w-xl mb-10">
        Upload an image or use your webcam for instant AI-based skin condition prediction.
      </p>

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
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
            <div className="space-y-6">
              {/* Top Prediction Highlight */}
              <div className="bg-green-100 p-4 rounded-xl shadow-md border border-green-400">
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  Most Likely Condition: {predictions[0].className}
                </h3>
                <p className="text-sm text-gray-700">
                  <strong>Confidence:</strong> {(predictions[0].probability * 100).toFixed(2)}%
                </p>
                {diseaseInfo[predictions[0].className] && (
                  <>
                    <p className="text-sm mt-2 text-gray-700">
                      <strong>Description:</strong> {diseaseInfo[predictions[0].className].description}
                    </p>
                    <p className="text-sm mt-1 text-green-700">
                      <strong>Suggested Care:</strong> {diseaseInfo[predictions[0].className].cure}
                    </p>
                  </>
                )}
              </div>

              {/* Other Predictions */}
              <div className="space-y-4">
                {predictions.slice(1).map((p, index) => {
                  const info = diseaseInfo[p.className];
                  return (
                    <div key={index} className="bg-blue-50 p-4 rounded-xl shadow space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-800 text-sm">{p.className}</span>
                        <span className="text-blue-600 font-semibold text-sm">{(p.probability * 100).toFixed(2)}%</span>
                      </div>
                      {info && (
                        <>
                          <p className="text-xs text-gray-700"><strong>Description:</strong> {info.description}</p>
                          <p className="text-xs text-green-700"><strong>Care:</strong> {info.cure}</p>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Upload an image to view predictions.</p>
          )}
        </div>
      </div>

      {/* Webcam Section (unchanged) */}
      <div className="mt-16 w-full max-w-4xl bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Live Webcam Analysis</h2>
        {!webcamActive ? (
          <button
            onClick={initWebcam}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Start Webcam
          </button>
        ) : (
          <div>
            <div id="webcam-container" className="mt-4" />
            <div id="label-container" ref={labelContainerRef} className="mt-4 space-y-2">
              {webcamPredictions.map((p, index) => {
                const info = diseaseInfo[p.className];
                return (
                  <div key={index} className="bg-blue-100 px-4 py-3 rounded-lg space-y-1">
                    <div className="flex justify-between font-semibold text-blue-800">
                      <span>{p.className}</span>
                      <span>{(p.probability * 100).toFixed(2)}%</span>
                    </div>
                    {info && (
                      <>
                        <p className="text-xs text-gray-700">
                          <strong>Description:</strong> {info.description}
                        </p>
                        <p className="text-xs text-green-700">
                          <strong>Care:</strong> {info.cure}
                        </p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-400 mt-8 text-center max-w-md">
        🔒 Your photo and video data is never stored or sent to any server. All analysis happens in your browser.
      </p>
    </div>
  );
};

export default SkinAnalysis;
