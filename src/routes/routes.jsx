import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import FacultyManagement from "../pages/FacultyManagement/FacultyManagement";
import CourseRegistration from "../pages/CourseRegistration/CourseRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <StudentDashboard />,
      },
      {
        path: "faculty",
        element: <FacultyManagement />,
      },
      {
        path: "course-register",
        element: <CourseRegistration />,
      },
    ],
  },
]);

export default router;
