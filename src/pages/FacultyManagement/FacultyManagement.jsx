import { useState, useEffect } from "react";
import FacultyCard from "./FacultyCard";

// Faculty data array
const facultyData = [
  {
    id: 1,
    name: "Prof. Abul Malek",
    designation: "Associate Professor",
    subject: "Web Development",
    officeHours: "Monday, Wednesday, Friday 9-11 AM",
    contact: "johnsmith@university.edu",
  },
  {
    id: 2,
    name: "Prof. Abdul Jolil",
    designation: "Professor",
    subject: "Data Structures",
    officeHours: "Tuesday, Thursday 10-12 PM",
    contact: "janedoe@university.edu",
  },
  {
    id: 3,
    name: "Prof. Mokhlesur Rahman",
    designation: "Assistant Professor",
    subject: "Operating Systems",
    officeHours: "Monday, Wednesday, Friday 1-3 PM",
    contact: "marklee@university.edu",
  },
  {
    id: 4,
    name: "Prof. Fatema Begum",
    designation: "Lecturer",
    subject: "Database Management",
    officeHours: "Monday, Wednesday, Friday 2-4 PM",
    contact: "fatema.begum@university.edu",
  },
  {
    id: 5,
    name: "Prof. Zakir Hossain",
    designation: "Senior Lecturer",
    subject: "Software Engineering",
    officeHours: "Tuesday, Thursday 9-11 AM",
    contact: "zakir.hossain@university.edu",
  },
  {
    id: 6,
    name: "Prof. Nilufa Akter",
    designation: "Assistant Professor",
    subject: "Artificial Intelligence",
    officeHours: "Monday, Wednesday, Friday 11 AM - 1 PM",
    contact: "nilufa.akter@university.edu",
  },
];

const FacultyManagement = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load faculty data into state
  useEffect(() => {
    setFacultyList(facultyData);
  }, []);

  // Filter faculty based on search term
  const filteredFaculty = facultyList.filter(
    (faculty) =>
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 lg:p-12">
      <h1 className="text-3xl text-blue-600 font-bold">Faculty Overview</h1>

      {/* Search Input */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search faculty by name or subject"
          className="border p-2 rounded w-full lg:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Faculty List */}
      <div className="mt-6">
        {filteredFaculty.length > 0 ? (
          <ul>
            {filteredFaculty.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </ul>
        ) : (
          <p>No faculty members found.</p>
        )}
      </div>
    </div>
  );
};

export default FacultyManagement;
