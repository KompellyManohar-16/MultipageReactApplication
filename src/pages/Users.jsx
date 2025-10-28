import React from "react";
import { Link } from "react-router-dom";
import { users } from "../data/users";

export default function Users() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Users</h2>
          <p className="text-sm text-slate-500">{users.length} users</p>
        </div>

        <ul className="space-y-4">
          {users.map((u) => (
            <li
              key={u.id}
              className="flex items-center justify-between p-3 border rounded-md hover:shadow-sm"
            >
              <div>
                <div className="font-medium">{u.name}</div>
                <div className="text-sm text-slate-500">{u.email}</div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to={`/users/${u.id}`}
                  className="px-3 py-1 text-sm border rounded hover:bg-slate-50"
                  aria-label={`View details for ${u.name}`}
                >
                  View
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
