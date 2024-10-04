/* eslint-disable react/prop-types */
import { useState } from "react";

const FacultyCard = ({ faculty }) => {
  // Destructure faculty properties inside the component body
  const { name, designation, subject, officeHours, contact } = faculty;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="bg-gray-100 p-4 my-2 rounded-lg shadow hover:bg-gray-200 cursor-pointer transition-all duration-300">
      <div
        onClick={() => setShowDetails(!showDetails)}
        className="flex justify-between items-center"
      >
        <div>
          <p className="font-bold">{name}</p>
          <p>
            {designation} - {subject}
          </p>
        </div>
        <button className="text-blue-500">
          {showDetails ? "Hide" : "Show"} Details
        </button>
      </div>

      {/* Animated Hidden Details */}
      <div
        className={`mt-2 text-sm text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${
          showDetails ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p>
          <strong>Office Hours:</strong> {officeHours}
        </p>
        <p>
          <strong>Contact:</strong> {contact}
        </p>
      </div>
    </li>
  );
};

export default FacultyCard;
