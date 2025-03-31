import { useState } from "react";

const Consult = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: "Dr. Smith", specialty: "Dermatologist" },
    { id: 2, name: "Dr. Johnson", specialty: "Skincare Expert" }
  ]);
  const [message, setMessage] = useState("");

  const handleBooking = (doctorId) => {
    setMessage(`Consultation booked with doctor ID: ${doctorId} (Mock Response)`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Book a Consultation</h2>
        <ul className="space-y-4">
          {doctors.map((doctor) => (
            <li key={doctor.id} className="flex justify-between items-center bg-gray-200 p-4 rounded-lg">
              <div>
                <p className="font-bold">{doctor.name}</p>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => handleBooking(doctor.id)}>Book</button>
            </li>
          ))}
        </ul>
        {message && <p className="text-green-500 mt-2 text-center">{message}</p>}
      </div>
    </div>
  );
};
export default Consult;