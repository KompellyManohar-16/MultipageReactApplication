import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
      <h2 className="text-3xl font-bold mb-4 text-slate-900">
        About <span className="text-blue-700">GovAssist</span>
      </h2>

      <p className="text-slate-700 mb-4 leading-relaxed">
        <strong>GovAssist</strong> is an intelligent web-based system that aims to
        simplify access to <strong>government schemes</strong> and{" "}
        <strong>employment opportunities</strong> for citizens across diverse
        socio-economic backgrounds. It bridges the gap between government
        initiatives and the people who need them most.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-800">
        Project Objective:
      </h3>
      <p className="text-slate-700 mb-4 leading-relaxed">
        The core objective of GovAssist is to provide{" "}
        <strong>personalized recommendations</strong> of welfare schemes and job
        opportunities using data analytics and machine learning. By analyzing
        family, income, education, and demographic data, the platform identifies
        programs users are eligible for — ensuring inclusivity and awareness.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-800">
        Technology Stack:
      </h3>
      <ul className="list-disc list-inside text-slate-700 mb-4 leading-relaxed">
        <li>
          <strong>Frontend:</strong> React (functional components), Tailwind CSS v4
          for responsive design.
        </li>
        <li>
          <strong>Routing:</strong> React Router v6 for smooth multi-page navigation.
        </li>
        <li>
          <strong>Backend:</strong> Flask (Python) for managing user data and model APIs.
        </li>
        <li>
          <strong>Machine Learning:</strong> Random Forest, XGBoost, and LightGBM models
          for accurate scheme and job recommendations.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-slate-800">
        Mission:
      </h3>
      <p className="text-slate-700 mb-6 leading-relaxed">
        To create a transparent and citizen-friendly digital ecosystem that helps
        individuals discover, understand, and apply for government schemes and job
        opportunities with ease — making governance truly accessible to all.
      </p>

      <Link
        to="/"
        className="inline-block px-5 py-2 bg-blue-700 text-white rounded-md shadow hover:bg-blue-800 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
