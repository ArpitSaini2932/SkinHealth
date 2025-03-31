import { useState } from "react";

const SkinScan = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setResult("Diagnosis: Possible skin issue detected (Mock Response)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Skin Scan</h2>
        <input className="w-full p-2 border rounded mb-4" type="file" onChange={handleImageUpload} />
        {image && <img src={URL.createObjectURL(image)} alt="Preview" className="w-48 h-48 object-cover rounded-lg mb-4" />}
        {result && <p className="text-green-500 mt-2">{result}</p>}
      </div>
    </div>
  );
};
export default SkinScan;