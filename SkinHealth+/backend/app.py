from flask import Flask, request, jsonify
from llama_cpp import Llama

llm = Llama.from_pretrained(
    repo_id="mradermacher/skin-disease-detection-GGUF",
    filename="skin-disease-detection.IQ4_XS.gguf"
)

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    prompt = data.get('prompt')

    output = llm(prompt=prompt, max_tokens=256)
    return jsonify(output)

if __name__ == '__main__':
    app.run(debug=True)
