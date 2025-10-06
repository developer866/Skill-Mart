import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-10 px-[10%]">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-[#C9FF4D]">SkillMart</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connecting the world with professionals, and professionals with the
            world. Empowering talent, building trust, and making opportunities
            accessible for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-[#C9FF4D] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#C9FF4D] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#C9FF4D] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#C9FF4D] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-gray-300 text-sm">
            📍 Lagos, Nigeria  
            <br />
            📧 support@skillmart.com  
            <br />
            📞 +234 90 333 83479
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SkillMart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
