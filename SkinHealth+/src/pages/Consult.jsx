import { useDispatch, useSelector } from 'react-redux';
import { bookAppointment } from '../redux/consultSlice'; 

const Consult = () => {
  const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Dermatologist" },
    { id: 2, name: "Dr. Johnson", specialty: "Skincare Expert" },
  ];
  
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.consult.appointment);

  const handleBooking = (doctor) => {
    dispatch(bookAppointment(`Appointment booked with ${doctor.name}, ${doctor.specialty}`));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Book a Consultation</h2>
        <ul className="space-y-4">
          {doctors.map((doctor) => (
            <li
              key={doctor.id}
              className="flex justify-between items-center bg-gray-200 p-4 rounded-lg"
            >
              <div>
                <p className="font-bold">{doctor.name}</p>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleBooking(doctor)}
              >
                Book
              </button>
            </li>
          ))}
        </ul>

        {appointment && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
            {appointment}
          </div>
        )}
      </div>
    </div>
  );
};

export default Consult;
