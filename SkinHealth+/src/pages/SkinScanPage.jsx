import React from "react";
import { Link } from "react-router-dom";
import consultantBg from '../resource/consult.jpg';


const SkinScanPage = () => {
  return (
    <div className="font-sans">

<section
  className="relative h-[50vh] bg-cover bg-top bg-no-repeat px-6 pt-12 pb-8 text-center"
  style={{ backgroundImage: `url(${consultantBg})` }}
>
  <div className="rounded-lg p-6 max-w-6xl mx-auto">
    
    {/* Doctor image + content */}
    <div className="grid md:grid-cols-2 items-center gap-8">
      <img
        src="/doctor-hero.jpg"
        alt=""
        className="w-full h-auto rounded-lg"
      />
      <div className="text-left">
        <h1 className="text-4xl font-bold mb-4">
          Consult a Dermatologist <span className="text-blue-600">Anytime, Anywhere!</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">Expert skin advice, anytime, anywhere</p>
        <Link to="/skin-analysis"><button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
          Book a Consultation
        </button></Link>
      </div>
    </div>

   
  </div>
</section>



      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">How It Works?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <h3 className="font-medium text-lg mb-2">Book Consultation</h3>
            <p className="text-gray-600">Book your Online Consultation</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <h3 className="font-medium text-lg mb-2">Connect</h3>
            <p className="text-gray-600">Connect with Your Dermatologist</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <h3 className="font-medium text-lg mb-2">Care Plan</h3>
            <p className="text-gray-600">Receive a Personalized Care Plan</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Top rated <span className="text-blue-600">Dermotologists</span>, just a click away</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Dr. Cooper Kristin", "Dr. Nguyen Shane", "Dr. Miles Esther", "Dr. Flores Juanita"].map((name, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={`/doc${idx + 1}.jpg`}
                alt={name}
                className="rounded w-full h-40 object-cover mb-4"
              />
              <h4 className="font-semibold text-lg">{name}</h4>
              <p className="text-gray-500 text-sm">MD Dermatologist</p>
              <Link to="/consult"><button className="mt-3 text-blue-600 border border-blue-600 rounded px-4 py-2 hover:bg-blue-50">Book an Appointment</button></Link>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">Your Skin, Our <span className="text-blue-600">Success</span> Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">“I was skeptical at first, but SkinHealth+ gave me accurate insights within seconds. The dermatologist consultation was smooth and super helpful. My skin has never felt better!”</p>
              <p className="mt-2 text-sm font-medium">Adwin John</p>
              <p className="text-xs text-gray-400">California, USA</p>
            </div>
          ))}
        </div>
      </section>


      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold">Trusted by <span className="text-blue-600">50,000+</span> users across 30+ countries</h2>
        <p className="text-gray-600 my-4">Join our global community and experience the future of dermatological care—powered by AI and trusted experts.</p>
        <Link
          to="/signup"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg text-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default SkinScanPage;
