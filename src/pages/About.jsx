import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black py-10 px-4 sm:px-6 lg:px-20 transition-colors duration-500">
      <div className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-lg dark:shadow-zinc-800/20 p-8 space-y-8 border border-transparent dark:border-zinc-800">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">About Velora</h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Welcome to <span className="font-semibold text-red-600">Velora</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we're here to power up your tech life with premium products and unbeatable service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            At Velora, our mission is to make innovative technology accessible to everyone. We're passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Why Choose Velora?</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            We envision a future where technology elevates everyday life. At Velora, we're committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">Join the Velora Family</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Whether you're a tech enthusiast, a professional, or just looking for something cool and functional — Velora has something for everyone.
          </p>
          <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
            Start Shopping
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;