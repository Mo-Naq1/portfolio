import React, { useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";

function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const textCenterX = rect.left + rect.width / 2;
        const textCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - textCenterX;
        const deltaY = e.clientY - textCenterY;

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const maxDistance = window.innerHeight; // Threshold distance for triggering the effect

        if (distance < maxDistance) {
          // Calculate intensity factor based on distance (closer is more intense)
          const intensity = 1 - distance / maxDistance;

          // Calculate rotation angles with intensity factor
          let rotateX = (deltaY / rect.height) * -35 * intensity;
          let rotateY = (deltaX / rect.width) * 30 * intensity;

          rotateX = Math.max(-40, Math.min(40, rotateX));
          rotateY = Math.max(-180, Math.min(180, rotateY));

          textRef.current.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
          textRef.current.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/me.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1
            ref={textRef}
            className="text-6xl font-bold text-gray-200"
            style={{ transition: "transform 0.3s ease-out" }}
          >
            Mohammed Naqi
          </h1>
          <p className="text-xl text-gray-200 text-center w-3/4 md:w-1/2">
            Passionate Developer | Musician | Leader
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-20 bg-white flex flex-col items-center">
        <div className="max-w-4xl text-center px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Hi, I'm Mohammed Naqi, a passionate developer with experience in
            building and maintaining various web projects. I have a strong
            background in React, TypeScript, Python, and modern web development
            tools. I'm always eager to learn new things and take on new
            challenges.
          </p>
        </div>
      </section>

      <section className="w-full py-20 bg-gray-100 flex flex-col items-center">
        <div className="max-w-7xl text-center px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            My Skills
          </h2>
          <div className="flex flex-row gap-5 justify-center">
            <div className="bg-lime-400 p-4 rounded-lg shadow-md w-40">
              <h3 className="text-xl font-semibold text-gray-800">React</h3>
            </div>
            <div className="bg-lime-300 p-4 rounded-lg shadow-md w-40">
              <h3 className="text-xl font-semibold text-gray-800">
                TypeScript
              </h3>
            </div>
            <div className="bg-lime-200 p-4 rounded-lg shadow-md w-40">
              <h3 className="text-xl font-semibold text-gray-800">Python</h3>
            </div>
            <div className="bg-lime-200 p-4 rounded-lg shadow-md w-40">
              <h3 className="text-xl font-semibold text-gray-800">
                JavaScript
              </h3>
            </div>
            <div className="bg-lime-300 p-4 rounded-lg shadow-md w-40">
              <h3 className="text-xl font-semibold text-gray-800">
                HTML & CSS
              </h3>
            </div>
            <div className="bg-lime-400 p-4 rounded-lg shadow-md w-40">
              <h3 className="text-xl font-semibold text-gray-800">
                Tailwind CSS
              </h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg md:col-span-2 mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-700">
              I enjoy continuous learning and always look for opportunities to
              grow both personally and professionally. Participating in
              hackathons like BridgeTO's Your Voice is Power and exploring new technologies are
              part of my journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
