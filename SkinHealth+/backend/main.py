from flask import Flask, request, jsonify
from llama_cpp import Llama
import os

app = Flask(__name__)

MODEL_PATH = "./skin_model/skin-disease-detection.Q4_K_S.gguf"

llm = Llama(model_path=MODEL_PATH, n_ctx=2048)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    question = data.get("question", "")

    response = llm(prompt=question, max_tokens=100)
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
