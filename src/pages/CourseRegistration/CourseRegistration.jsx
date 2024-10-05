/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Modal } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const courseList = [
  {
    id: 1,
    name: "Web Development",
    syllabus: "HTML, CSS, JavaScript, React",
    credits: 3,
    prerequisites: "None",
  },
  {
    id: 2,
    name: "Data Structures",
    syllabus: "Arrays, Linked Lists, Trees",
    credits: 4,
    prerequisites: "Programming Basics",
  },
  {
    id: 3,
    name: "Operating Systems",
    syllabus: "Processes, Threads, Memory Management",
    credits: 3,
    prerequisites: "Computer Architecture",
  },
  {
    id: 4,
    name: "Database Systems",
    syllabus: "SQL, NoSQL, Transactions",
    credits: 3,
    prerequisites: "None",
  },
];

const CourseRegistration = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
  });
  const [errors, setErrors] = useState({});
  const [courseDetails, setCourseDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCourseChange = (e) => {
    const courseId = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedCourses([...selectedCourses, courseId]);
    } else {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    }
  };

  const showCourseDetails = (course) => {
    setCourseDetails(course);
  };

  const closeCourseDetails = () => {
    setCourseDetails(null);
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.studentId) formErrors.studentId = "Student ID is required";
    if (selectedCourses.length === 0)
      formErrors.courses = "Select at least one course";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        console.log("Form Data:", formData);
        console.log("Selected Courses:", selectedCourses);

        toast.success("Course registration successful!", {
          position: "top-right",
        });

        setFormData({ name: "", email: "", studentId: "" });
        setSelectedCourses([]);
      } catch (error) {
        toast.error("Failed to register courses. Please try again.", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl text-blue-600 font-bold mb-6 text-center">
          Enroll in Courses
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              className={`border p-2 rounded w-full ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Email:</label>
            <input
              type="email"
              name="email"
              className={`border p-2 rounded w-full ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Student ID:</label>
            <input
              type="text"
              name="studentId"
              className={`border p-2 rounded w-full ${
                errors.studentId ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.studentId}
              onChange={handleChange}
            />
            {errors.studentId && (
              <p className="text-red-500 text-sm">{errors.studentId}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Select Courses:</label>
            {courseList.map((course) => (
              <div key={course.id}>
                <input
                  type="checkbox"
                  value={course.id}
                  onChange={handleCourseChange}
                  checked={selectedCourses.includes(course.id)}
                />
                <label className="ml-2">{course.name}</label>
                <button
                  className="ml-4 text-blue-500 hover:underline"
                  type="button"
                  onClick={() => showCourseDetails(course)}
                >
                  View Details
                </button>
              </div>
            ))}
            {errors.courses && (
              <p className="text-red-500 text-sm">{errors.courses}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Modal for course details */}
        {courseDetails && (
          <Modal
            visible={!!courseDetails}
            onCancel={closeCourseDetails}
            footer={null}
            title={`Course Details: ${courseDetails.name}`}
          >
            <p>
              <strong>Syllabus:</strong> {courseDetails.syllabus}
            </p>
            <p>
              <strong>Credits:</strong> {courseDetails.credits}
            </p>
            <p>
              <strong>Prerequisites:</strong> {courseDetails.prerequisites}
            </p>
          </Modal>
        )}

        {/* React Toastify Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default CourseRegistration;
