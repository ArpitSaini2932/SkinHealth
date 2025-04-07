import * as tf from '@tensorflow/tfjs';

const CLASS_LABELS = ["Healthy Skin", "Acne", "Eczema", "Psoriasis", "Melanoma", "Rosacea"];

let model;
export const loadModel = async () => {
  if (!model) {
    console.log("Loading skin analysis AI model...");
    model = await tf.loadLayersModel('/models/skin_model.json'); 
    console.log("Model loaded successfully.");
  }
};

const preprocessImage = (imageElement) => {
  let tensor = tf.browser.fromPixels(imageElement)
    .resizeBilinear([224, 224]) 
    .toFloat()
    .div(tf.scalar(255)) 
    .expandDims(0); 

  return tensor;
};

export const analyzeImage = async (imageElement) => {
  if (!model) {
    await loadModel();
  }

  const tensor = preprocessImage(imageElement);
  const predictions = model.predict(tensor);
  const probabilities = await predictions.data();

  const maxIndex = probabilities.indexOf(Math.max(...probabilities));
  return [{ className: CLASS_LABELS[maxIndex], probability: probabilities[maxIndex] }];
};
