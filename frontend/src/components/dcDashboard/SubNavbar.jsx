import React from "react";
import { Link } from "react-router-dom";

function SubNavbar() {
  return (
    <div className="w-full bg-blue-600 text-white shadow-sm">

      <div className="max-w-7xl mx-auto flex gap-6 px-6 py-2">

        <Link
          to="/"
          className="hover:bg-blue-800 px-4 py-2 rounded transition"
        >
          DC Dashboard
        </Link>

        <Link
          to="/star-marked"
          className="hover:bg-blue-800 px-4 py-2 rounded transition"
        >
          ⭐ Star Marked
        </Link>

        <Link
          to="/weekly-review"
          className="hover:bg-blue-800 px-4 py-2 rounded transition"
        >
          Weekly Review
        </Link>

        <Link
          to="/court-cases"
          className="hover:bg-blue-800 px-4 py-2 rounded transition"
        >
          Court Cases
        </Link>

      </div>

    </div>
  );
}

export default SubNavbar;