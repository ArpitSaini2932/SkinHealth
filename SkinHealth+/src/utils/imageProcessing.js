import * as tf from '@tensorflow/tfjs';

export const preprocessImage = (imageElement) => {
  let tensor = tf.browser.fromPixels(imageElement);
  tensor = tf.image.resizeBilinear(tensor, [224, 224]);
  tensor = tensor.div(tf.scalar(255));
  tensor = tensor.expandDims(0);
  return tensor;
};
