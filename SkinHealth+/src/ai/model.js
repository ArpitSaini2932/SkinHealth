import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

let model;

export const loadModel = async () => {
  model = await mobilenet.load(); // Load the model
  console.log("AI Model Loaded Successfully!");
};

export const analyzeImage = async (image) => {
  if (!model) await loadModel(); 

  const tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).expandDims();
  const predictions = await model.classify(tensor);
  
  return predictions; 
};
