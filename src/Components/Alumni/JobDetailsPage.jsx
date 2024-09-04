import React from 'react';

const JobDetailsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Applying for Full Stack Development Internship</h1>
      <h2 className="text-lg text-gray-600 mb-6">Sustain Farmers</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Key responsibilities</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Develop: Create and maintain web applications with a focus on responsive design to ensure mobile-friendly interfaces.</li>
          <li>Implement: Build core MVP features as per the requirements.</li>
          <li>Collaborate: Work with the team to design user-friendly interfaces and enhance user experience.</li>
          <li>Optimize: Troubleshoot, debug, and ensure the platform runs smoothly.</li>
          <li>Innovate: Integrate AI/ML functionalities to enhance user experience and automate processes.</li>
          <li>Full Stack Development: Handle both front-end and back-end development tasks to ensure seamless integration and functionality of the web application.</li>
          <li>Learn: Stay updated with the latest web technologies and bring fresh ideas to the table.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Skill(s) required</h3>
        <div className="flex flex-wrap gap-2">
          {['AngularJS', 'Artificial Intelligence', 'JavaScript', 'Machine Learning', 'MongoDB', 'Next.js', 'Node.js', 'PostgreSQL', 'Python', 'React Native'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Perks</h3>
        <div className="flex flex-wrap gap-2">
          {['Certificate', 'Letter of recommendation', 'Flexible work hours'].map((perk) => (
            <span key={perk} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {perk}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">About Sustain Farmers</h3>
        <p className="text-gray-700">
          Transforming the way you experience natural foods. Our commitment to quality begins at the farm and extends
          to your table. By teaming up with local farmers, we focus on sustainability and unparalleled freshness for a
          healthier lifestyle.
        </p>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Hiring since September 2023</p>
        <p>12 opportunities posted</p>
        <p>10 candidates hired</p>
      </div>

      <button className="w-full mt-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
        Continue
      </button>
    </div>
  );
};

export default JobDetailsPage;
