










































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
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white-50 to-white-100 " style={{ backgroundImage:"url('/backroundImage.png')"}}>
//         <Navbar/>
    
// {/*    
//       <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
//         <h1 className="text-2xl font-bold text-blue-600">
//           MasterDashboard
//         </h1>

//         <ul className="hidden md:flex gap-8 font-medium text-gray-700">
//           <li className="hover:text-blue-600 cursor-pointer">Home</li>
//           <li className="hover:text-blue-600 cursor-pointer">About</li>
//           <li className="hover:text-blue-600 cursor-pointer">Features</li>
//           <li className="hover:text-blue-600 cursor-pointer"></li>
//         </ul>

//         <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
//           Contact
//         </button>
//       </nav> */}

//       {/* ================= HERO SECTION ================= */}
// {/* <Navbar /> */}

// {/* HERO SECTION */}
// <section
//   className="text-white py-20 px-10 text-center bg-cover bg-center"
//   style={{ backgroundImage: "url('/hero.png')" }}
// >
//   <h2 className="text-4xl font-bold mb-4">
//     Digital Governance & Monitoring Portal
//   </h2>
//   <p className="text-lg">
//     Transparent Administration • Real-Time Data • Accountable Governance
//   </p>

//   <div className="mt-8">
//     <button
//       onClick={handleSubmit}
//       className="bg-white text-orange-300 px-8 py-3 rounded shadow font-semibold hover:bg-gray-200 transition"
//     >
//       Login to Dashboard
//     </button>
//   </div>
// </section>

//       {/* ================= CARDS SECTION ================= */}
//       <section className="max-w-6xl mx-auto px-6 pb-20 mt-20">
//         <div className="grid md:grid-cols-3 gap-8">

//           {/* Health Card */}
//           <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
//             <h3 className="text-xl font-semibold mb-3 text-red-500">
//               ❤️ Health Analytics
//             </h3>
//             <img src="/health.png" alt="" />
//             <p className="text-gray-600 mb-4">
//               Visualize hospital data, disease trends, and medical statistics.
//             </p>
//             <button className="text-blue-600 font-medium hover:underline">
//               View Dashboard →
//             </button>
//           </div>

//           {/* Education Card */}
//           <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
//             <h3 className="text-xl font-semibold mb-3 text-indigo-500">
//               🎓 Education Insights
//             </h3>
//             <img src="/education.png" alt="" />
//             <p className="text-gray-600 mb-4">
//               Track student performance, school data and literacy rates.
//             </p>
//             <button className="text-blue-600 font-medium hover:underline">
//               View Dashboard →
//             </button>
//           </div>

//           {/* MNREGA Card */}
//           <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
//             <h3 className="text-xl font-semibold mb-3 text-green-600">
//               ⚙️ MNREGA Stats
//             </h3>
//             <img src="health.png" alt="" />
//             <p className="text-gray-600 mb-4">
//               Analyze fund allocation, employment data and rural development.
//             </p>
//             <button className="text-blue-600 font-medium hover:underline">
//               View Dashboard →
//             </button>
//           </div>

//         </div>
//       </section>
//       <Footer/>

//     </div>
//   );
// }
return (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-gray-900 text-white text-sm py-2 px-6 flex justify-between">
  <span>Government of Punjab</span>
  <span>Office of the District Commissioner</span>
</div>

    <Navbar />

    {/* ================= HERO SECTION ================= */}
    <section
      className="relative h-[60vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero.png')",
        // backgroundSize: "cover",
        backgroundPosition: "center",
         backgroundSize: "70%",
        

      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl px-6">
        {/* <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Digital Governance & Monitoring Portal
        </h2> */}

        {/* <p className="text-lg md:text-xl text-gray-200">
          Transparent Administration • Real-Time Data • Accountable Governance
        </p> */}

        <div className="mt-10">
          <button
            onClick={handleSubmit}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md font-semibold shadow-lg transition duration-300"
          >
            Login to Dashboard
          </button>
        </div>
      </div>
    </section>






    {/* ================= CARDS SECTION ================= */}
    {/* <section className="max-w-7xl mx-auto px-6 py-20"> */}
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-6"></div>

      <div className="text-center mb-14">
        <h3 className="text-3xl font-bold text-gray-800">
          Departmental Analytics Overview
        </h3>
        <p className="text-gray-500 mt-3">
          Monitor key performance indicators across district departments
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Health */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border">
          <h3 className="text-xl font-semibold mb-4 text-red-600">
            ❤️ Health Analytics
          </h3>
          <img src="/health.png" className="h-24 mx-auto mb-6" />
          <p className="text-gray-600 mb-6">
            Visualize hospital data, disease trends and public health insights.
          </p>
          <button className="border border-red-600 text-red-600 px-5 py-2 rounded-md hover:bg-red-600 hover:text-white transition">
            View Dashboard
          </button>
        </div>

        {/* Education */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">
            🎓 Education Insights
          </h3>
          <img src="/education.png" className="h-24 mx-auto mb-6" />
          <p className="text-gray-600 mb-6">
            Track student performance, literacy rates and school development.
          </p>
          <button className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition">
            View Dashboard
          </button>
        </div>

        {/* MNREGA */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border">
          <h3 className="text-xl font-semibold mb-4 text-green-600">
            ⚙️ MNREGA Stats
          </h3>
          <img src="/mnrega.png" className="h-24 mx-auto mb-6" />
          <p className="text-gray-600 mb-6">
            Analyze fund allocation and rural employment statistics.
          </p>
          <button className="border border-green-600 text-green-600 px-5 py-2 rounded-md hover:bg-green-600 hover:text-white transition">
            View Dashboard
          </button>
        </div>
        

      </div>
    </section>





    <Footer />
  </div>
);

}
export default LandingPage;














