import { useDispatch, useSelector } from "react-redux";
import { bookAppointment, startCall } from "../redux/consultSlice";
import { useNavigate } from "react-router-dom";

const Consult = () => {
  const doctors = [
    { id: 1, name: "Dr. Ankita", specialty: "Dermatologist" },
    { id: 2, name: "Dr. Trisha", specialty: "Skincare Expert" }
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const appointments = useSelector(state => state.consult.appointments);

  const handleBooking = (doctor) => {
    const appointment = { doctor, time: new Date().toISOString() };
    dispatch(bookAppointment(appointment));
    alert(`Appointment booked with ${doctor.name}`);
    navigate("/consult");
  };

  const handleJoinCall = (appointment) => {
    dispatch(startCall(appointment));
    navigate("/video-call");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-indigo-200 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          Book a Skin Consultation
        </h2>

        <ul className="space-y-5">
          {doctors.map((doctor) => (
            <li
              key={doctor.id}
              className="flex justify-between items-center bg-indigo-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div>
                <p className="font-semibold text-lg text-gray-800">{doctor.name}</p>
                <p className="text-sm text-indigo-600">{doctor.specialty}</p>
              </div>
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-medium shadow-md transition-all"
                onClick={() => handleBooking(doctor)}
              >
                Book
              </button>
            </li>
          ))}
        </ul>

        {appointments.length > 0 && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5">
            <h3 className="text-lg font-bold text-green-700 mb-2">Your Appointments</h3>
            <div className="space-y-3">
              {appointments.map((appt, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white p-3 rounded-xl shadow hover:shadow-sm"
                >
                  <span className="text-sm text-gray-700">
                    {appt.doctor.name} -{" "}
                    {new Date(appt.time).toLocaleString()}
                  </span>
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded-full font-medium transition"
                    onClick={() => handleJoinCall(appt)}
                  >
                    Join Call
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Consult;
