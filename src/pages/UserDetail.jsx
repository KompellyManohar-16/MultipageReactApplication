import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { users } from "../data/users";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = Number(id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h3 className="text-xl font-semibold mb-3">User not found</h3>
        <p className="text-slate-600 mb-4">
          We couldn't find a user with ID {id}.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => navigate("/users")}
            className="px-4 py-2 bg-slate-900 text-white rounded-md"
          >
            Back to Users
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-slate-500">
            {user.role} • {user.location}
          </p>
        </div>

        <div>
          <Link to="/users" className="text-sm px-3 py-1 border rounded">
            Back to Users
          </Link>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-slate-700">{user.email}</p>
        </div>

        <div className="p-4 border rounded">
          <h4 className="font-medium mb-2">Meta</h4>
          <p className="text-slate-700">ID: {user.id}</p>
          <p className="text-slate-700">Location: {user.location}</p>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-slate-900 text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    </section>
  );
}
