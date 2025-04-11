// File: src/pages/MainPage.jsx
import React from 'react';
import { Link } from "react-router-dom";
import img from '../import/import';

const Home = () => {
  return (
    <div className="font-sans">

      <section className="p-10 bg-gray-50 min-h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="flex flex-col text-[64px] font-medium mb-4">
              Transform <span>Your Skin with</span>  <span className="text-blue-500">AI-Powered Care!</span>
            </h1>
            <p className="text-gray-600 text-[25px] font-normal mb-6">
              Powered by AI, guided by dermatologists—your smart solution for fast and accurate skin health insights.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-500 rounded-4xl text-[23px] text-white px-6 py-2 rounded hover:bg-blue-600 hover:scale-105 hover:brightness-110 transition duration-300">Get AI Skin Analysis</button>
              <button className="px-6 py-2 text-[23px] shadow-lg rounded-4xl hover:bg-gray-100">Read More</button>
            </div>
          </div>
          <img
            src={img.lady}
            alt="Doctor"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

  
      <section className="text-center m-auto justify-center align-middle py-16 bg-white">
       <div className='flex justify-center align-middle'> <h2  className="  text-[40px] font-semibold mb-4">
          Why Choose </h2><img className="w-64" src={img.skinHealth} alt="" /><span  className='text-[40px] font-bold'>?</span>
        </div>
        <p className="text-black max-w-xl text-[20px] font-medium mx-auto mb-10">
          Combining AI innovation with trusted dermatologists to give you personalized, effective, and accessible skin care.
        </p>
        <div className="grid md:grid-cols-3 gap-8 px-10">
          <div>
          <h4 className="font-bold">AI-Powered Skin Analysis</h4>
            <p className="text-sm text-gray-600">
              Get instant, accurate skin condition assessments with our advanced AI—anytime, anywhere.
            </p>
            <img
              src={img.pic1}
              alt="AI Skin Analysis"
              className="rounded-lg h-48 w-full object-cover mb-4"
            />
          </div>
          <div>
            <img
              src={img.pic2}
              alt="Certified Dermatologists"
              className="rounded-lg h-48 w-full object-cover mb-4"
            />
            <h4 className="font-bold">Certified Dermatologist Access</h4>
            <p className="text-sm text-gray-600">
              Connect with top-rated skin experts without long wait times.
            </p>
          </div>
          <div>
          <h4 className="font-bold">Supportive Skin Community</h4>
            <p className="text-sm text-gray-600">
              Join a supportive space where users share real experiences, skincare tips, and success stories.
            </p>
            <img
              src={img.pic3}
              alt="Skin Community"
              className="rounded-lg h-48 w-full object-cover mb-4"
            />
            
          </div>
        </div>
      </section>


      <section className="text-center py-10 bg-blue-50">
       <Link 
               to="/signup" 
               className="px-8 py-3 bg-blue-600 text-white rounded-lg text-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
             >
               Get Started
             </Link>
      </section>

      
      <section className="py-16 px-10 bg-white">
        <h3 className="text-2xl font-semibold text-center mb-8">Hear It from Our <span className="text-blue-500">Community</span></h3>
        <div className="grid md:grid-cols-3 gap-6">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="border p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="user"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">Adrwin John</p>
                  <p className="text-sm text-gray-500">Verified User</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                I was skeptical at first, but SkinHealth+ gave me accurate insights within seconds. The dermatologist consultation was smooth and super helpful. My skin has never felt better!
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
