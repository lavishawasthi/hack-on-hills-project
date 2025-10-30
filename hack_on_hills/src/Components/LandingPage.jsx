import React from 'react';
import Freelancing from "../assets/landing.jpg"
const LandingPage = () => {
  return (
    <div className="font-montserrat text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
        <div className="text-lg font-semibold">Montserrat</div>
        <div className="flex gap-8 text-sm">
          <a href="#Contact" className="hover:text-blue-500">Contact</a>
          <a href="#About" className="hover:text-blue-500">About</a>
          <a href="#Feature" className="hover:text-blue-500">Feature</a>
        </div>
        <div className="flex gap-4">
          <button className="text-sm border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50">Sign in</button>
          <button className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-stretch px-6 md:px-20 py-20 bg-white gap-10">
        <div className="max-w-lg flex flex-col justify-between">
          <h1 className="text-4xl font-bold leading-tight mb-4">
            The Future of Freelancing — <br /> Fair, Transparent, Decentralized.
          </h1>
          <p className="text-gray-500 mb-8">
            Empowering freelancers with zero commission, secure payments, and blockchain-based trust.
          </p>
          <div className="mt-6 md:mt-8 flex justify-between items-end">
            <button className="bg-white text-black border border-[#7030DE] px-6 py-2 rounded font-medium hover:bg-[rgba(112,48,222,0.06)] focus:outline-none focus:ring-2 focus:ring-[#7030DE]/30">Learn More</button>
            <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">Get Started</button>
          </div>
        </div>
        <img src={Freelancing} alt="home image" className="w-full md:w-[400px] object-contain" />
      </section>

      {/* Features */}
      <section id="Feature" className="text-center py-16 bg-white">
        <h2 className="text-xl font-semibold mb-12">Our Feature</h2>
        <div className="flex justify-center gap-10">
          {["Blockchain Escrow", "Transparent Reputation", "Zero Commissions", "Secure & Verified"].map((feature, idx) => (
            <div key={idx} className="w-56 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="font-semibold mb-2">{feature}</h3>
              <p className="text-gray-500 text-sm">
                {feature === "Blockchain Escrow" && "Payments held securely until project completion."}
                {feature === "Transparent Reputation" && "Immutable trust system for every freelancer."}
                {feature === "Zero Commissions" && "Freelancers keep what they earn."}
                {feature === "Secure & Verified" && "Each project backed by blockchain authenticity."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="About" className="py-16 bg-white text-center">
        <h2 className="text-xl font-semibold mb-10">How It Works</h2>
        <div className="flex justify-center items-center gap-16">
          {[
            { title: "Post Project", desc: "Clients post what they need." },
            { title: "Get Matched", desc: "Freelancers apply instantly." },
            { title: "Work Securely", desc: "Payment locked until tasks agree." },
          ].map((step, index) => (
            <div key={index} className="w-48">
              <div className="flex justify-center items-center w-12 h-12 mx-auto border border-blue-400 rounded-full mb-4 text-blue-600 font-semibold">
                {index + 1}
              </div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="Contact" className="bg-blue-950 text-white py-12 text-center rounded-t-2xl">
        <h3 className="text-lg mb-4">Join the next generation of freelancers today.</h3>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Sign Up</button>
        <footer className="mt-10 text-sm text-blue-200">
          <p>Footer (Bottom)</p>
          <p>Purpose: Add user info briefly + navigation</p>
          <p>Platform name + short description</p>
          <p>Links: About | Terms | Privacy | Contact Us</p>
          <p>Social icons (LinkedIn | Twitter | GitHub)</p>
          <p className="mt-4">Copyright © 2025 FreeChain</p>
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;
