import { useEffect, useState } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/doctors").then((res) => setDoctors(res.data));
  }, []);

  const bookAppointment = async () => {
    await axios.post("http://localhost:5000/appointments", {
      userId: "123", // Replace with logged-in user ID
      doctorId: selectedDoctor._id,
      date: appointmentDate,
    });
    alert("Appointment booked!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Find a Dermatologist</h2>

      <ul>
        {doctors.map((doc) => (
          <li key={doc._id} className="border p-4 my-2">
            <p><strong>{doc.name}</strong> - {doc.specialty}</p>
            <button onClick={() => setSelectedDoctor(doc)}>Book Appointment</button>
          </li>
        ))}
      </ul>

      {selectedDoctor && (
        <div className="mt-4">
          <h3>Book an appointment with {selectedDoctor.name}</h3>
          <input type="date" onChange={(e) => setAppointmentDate(e.target.value)} />
          <button onClick={bookAppointment} className="bg-blue-500 px-4 py-2 text-white">Confirm</button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
