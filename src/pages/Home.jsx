import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
      <h1 className="text-3xl font-bold mb-3 text-black-900">
        Welcome to <span className="text-blue-800">GovAssist</span>
      </h1>
      <p className="text-black-600 mb-4">
        <strong>GovAssist</strong> is an intelligent platform designed to help citizens discover 
        government schemes and job opportunities that match their unique socio-economic and demographic profile.
      </p>

      <h2 className="text-xl font-semibold mb-2 text-black-800">
        Project Highlights:
      </h2>
      <ul className="list-disc list-inside text-black-700 mb-6 leading-relaxed">
        <li>
          Personalized recommendations for <strong>government schemes</strong> and <strong>jobs</strong>.
        </li>
        <li>
          Machine learning models like <strong>Random Forest</strong>, <strong>XGBoost</strong>, and <strong>LightGBM</strong> 
          enhance accuracy and efficiency.
        </li>
        <li>
          User-friendly web interface powered by <strong>React</strong> and styled with <strong>Tailwind CSS</strong>.
        </li>
        <li>
          Seamless navigation using <strong>React Router</strong> for a smooth, single-page experience.
        </li>
      </ul>

      <p className="text-black-600 mb-6">
        Our mission is to bridge the gap between citizens and welfare opportunities by 
        simplifying access to government resources and making the process inclusive and transparent.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          to="/about"
          className="px-5 py-2 bg-blue-700 text-white rounded-md shadow hover:bg-blue-800 transition"
        >
          Learn More About GovAssist
        </Link>

        <Link
          to="/users"
          className="px-5 py-2 border border-black-300 text-black-700 rounded-md hover:bg-black-50 transition"
        >
          View Registered Users
        </Link>
      </div>
    </section>
  )
}
