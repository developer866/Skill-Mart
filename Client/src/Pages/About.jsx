import React from "react";

function About() {
  return (
    <section id="about" className="bg-[#0a0a0a]  text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        About <span className="text-[#C9FF4D]">SkillMart</span>
      </h1>

      {/* Tagline */}
      <p className="text-lg text-gray-300 max-w-2xl text-center leading-relaxed mb-10">
        SkillMart is a platform that bridges the gap between{" "}
        <span className="text-[#C9FF4D]">skilled professionals</span> and
        clients who need their services. Our mission is to create opportunities,
        empower talent, and make finding the right professional easy, fast, and
        reliable.
      </p>

      {/* Two-column section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full mt-6">
        {/* Left side - Image */}
        <div className="flex justify-center">
          <img
            src="/images/artisan.jpg"
            alt="Artisan working"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Right side - Text */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-semibold text-[#C9FF4D]">
            Connecting Skills. Empowering Futures.
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At SkillMart, we believe everyone deserves access to trusted
            professionals — from artisans and designers to developers and
            educators. Our goal is to give skilled individuals visibility and
            clients confidence in who they hire.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Whether you're a client looking for talent or a professional seeking
            opportunities, SkillMart is your go-to marketplace to connect, grow,
            and thrive.
          </p>
          <button className="bg-[#C9FF4D] text-black font-medium px-6 py-2 rounded-full w-fit hover:bg-lime-400 transition-all duration-200">
            Join SkillMart Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
