const StudentDashboard = () => {
  const studentData = {
    name: "Ashikuzzaman Moon",
    studentId: "123456",
    courses: [
      {
        name: "Web Development",
        grade: "A",
        info: "Course taught by Prof. Abul Malek",
      },
      {
        name: "Data Structures",
        grade: "B",
        info: "Course taught by Prof. Abdul Jolil",
      },
      {
        name: "Operating Systems",
        grade: "A-",
        info: "Course taught by Prof. Mokhlesur Rahman",
      },
    ],
    upcomingEvents: ["Orientation: September 15", "Midterm Exams: October 10"],
    notifications: [
      "Your registration for the Fall semester is complete.",
      "Please submit your project by October 5.",
    ],
  };

  return (
    <div className="p-6 md:p-10 lg:p-12">
      <h1 className="text-3xl text-blue-600 font-bold hover:text-blue-800 transition-colors duration-300">
        Student Portal
      </h1>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Welcome, {studentData.name}!</h2>
        <p className="text-lg">
          <strong>Student ID:</strong> {studentData.studentId}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Enrolled Courses</h2>
        <ul>
          {studentData.courses.map((course, index) => (
            <li
              key={index}
              className="group p-4 my-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 cursor-pointer transition-all duration-300"
            >
              <span className="font-bold">{course.name}</span> - Grade:{" "}
              {course.grade}
              {/* Hidden info that appears on hover */}
              <span className="block mt-1 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {course.info}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Notifications</h2>
        <ul>
          {studentData.notifications.map((notification, index) => (
            <li
              key={index}
              className="bg-yellow-200 p-3 rounded-lg my-2 transition-transform duration-300 transform hover:scale-105"
            >
              {notification}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <ul>
          {studentData.upcomingEvents.map((event, index) => (
            <li
              key={index}
              className="bg-blue-100 p-3 rounded-lg my-2 transition-transform duration-300 transform hover:scale-105"
            >
              {event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
