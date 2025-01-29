import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://www.meme-arsenal.com/memes/30c4e162e9b408f6bb0fc0d044cdd287.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Hi, I'm Henry Liu, a passionate developer with expertise in web
            technologies. I love creating beautiful and functional applications
            that solve real-world problems.
          </p>
          <p className="text-lg text-gray-700">
            With over 5 years of experience in software development, I
            specialize in React, TypeScript, and modern web development
            practices.
          </p>
          <div className="pt-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Tailwind CSS", "Git"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
