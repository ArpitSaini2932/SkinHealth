const AboutUs = () => {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
              We are a team of passionate individuals dedicated to improving skin health and wellness with the power of AI. Our mission is to provide accessible, reliable, and personalized dermatology assistance to everyone.
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3 text-center">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Founder" 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">Arpit The Great</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="w-1/3 text-center">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Co-Founder" 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">Ankita Bitch</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>
            <div className="w-1/3 text-center">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member" 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">Trisha :The Piddu</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  