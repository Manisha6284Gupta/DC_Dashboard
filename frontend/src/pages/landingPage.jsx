










































import React from "react";
import axios from "axios"
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

// import LoginPage from "./loginPage";

function LandingPage() {
  
  // const [started, getStarted] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () =>{
    try {
      navigate("/login")
    } catch (error) {
      console.log(error)
      
    }


  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-50 to-white-100 " style={{ backgroundImage:"url('/backroundImage.png')"}}>
        <Navbar/>
    
{/*    
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">
          MasterDashboard
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer"></li>
        </ul>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact
        </button>
      </nav> */}

      {/* ================= HERO SECTION ================= */}
{/* <Navbar /> */}

{/* HERO SECTION */}
<section
  className="text-white py-20 px-10 text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/heroImage.png')" }}
>
  <h2 className="text-4xl font-bold mb-4">
    Digital Governance & Monitoring Portal
  </h2>
  <p className="text-lg">
    Transparent Administration • Real-Time Data • Accountable Governance
  </p>

  <div className="mt-8">
    <button
      onClick={handleSubmit}
      className="bg-white text-orange-300 px-8 py-3 rounded shadow font-semibold hover:bg-gray-200 transition"
    >
      Login to Dashboard
    </button>
  </div>
</section>

      {/* ================= CARDS SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-20 mt-20">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Health Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3 text-red-500">
              ❤️ Health Analytics
            </h3>
            <img src="/health.png" alt="" />
            <p className="text-gray-600 mb-4">
              Visualize hospital data, disease trends, and medical statistics.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              View Dashboard →
            </button>
          </div>

          {/* Education Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3 text-indigo-500">
              🎓 Education Insights
            </h3>
            <img src="/education.png" alt="" />
            <p className="text-gray-600 mb-4">
              Track student performance, school data and literacy rates.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              View Dashboard →
            </button>
          </div>

          {/* MNREGA Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              ⚙️ MNREGA Stats
            </h3>
            <img src="health.png" alt="" />
            <p className="text-gray-600 mb-4">
              Analyze fund allocation, employment data and rural development.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              View Dashboard →
            </button>
          </div>

        </div>
      </section>
      <Footer/>

    </div>
  );
}

export default LandingPage;
