import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl">Get to know the team behind the blog</p>
        </div>
      </header>

      {/* Team Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Satya's Profile Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co/FmHgQNz/profile-pic.png"
                alt="Satya Suranjeet Jena"
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Satya Suranjeet Jena</h3>
                <p className="mt-2 text-gray-600">
                  I am a passionate developer with a keen interest in web technologies. My journey in software development has equipped me with a solid foundation in various programming languages and frameworks, including React and Node.js. I love building engaging and user-friendly applications that solve real-world problems.
                </p>
              </div>
            </div>

            {/* Vijay's Profile Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co/k4r5jX8/108749195.png"
                alt="Vijay Kumar Mahto"
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Vijay Kumar Mahto</h3>
                <p className="mt-2 text-gray-600">
                  As a repository manager, I focus on maintaining the quality and integrity of our projects. My role involves coordinating between different teams, ensuring timely updates, and managing documentation. I have a strong background in project management and a passion for collaborating with talented individuals.
                </p>
              </div>
            </div>

            {/* Sriya's Profile Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co/Gp0n4kY/avatar-Profile-Picture-Maker-com.png" // Replace with an actual image link
                alt="Sriya Smidha"
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Sriya Smidha</h3>
                <p className="mt-2 text-gray-600">
                  I'm a front-end React expert with a deep passion for creating intuitive and interactive user interfaces. With experience in various web technologies, I love building seamless, scalable applications and always strive to enhance the user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
