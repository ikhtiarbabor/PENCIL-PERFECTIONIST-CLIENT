import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Home from '../Pages/Home/Home/Home';
import ErrorPage from '../Error/ErrorPage';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import DashboardLayout from '../Layouts/Dashboard/DashboardLayout';
import StudentHome from '../Pages/DashBoard/StudendDashboard/StudentHome/StudentHome';
import StudentBookedClasses from '../Pages/DashBoard/StudendDashboard/StudentBookedClasses/StudentBookedClasses';
import StudentEnrollClasses from '../Pages/DashBoard/StudendDashboard/StudentEnrollClasses/StudentEnrollClasses';
import AdminDashboard from '../Pages/DashBoard/Admin/AdminDashboard/AdminDashboard';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import StudentsRoute from './StudentsRoute';
import AllUser from '../Pages/DashBoard/Admin/AllUser/Alluser';
import AllClasses from '../Pages/DashBoard/Admin/AllClasses/AllClasses';
import PendingClasses from '../Pages/DashBoard/Admin/PendingClasses/PendingClasses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'studentDashboard',
        element: (
          <StudentsRoute>
            <StudentHome />
          </StudentsRoute>
        ),
      },
      {
        path: 'studentBookedClasses',
        element: <StudentBookedClasses />,
      },
      {
        path: 'studentEnrollClasses',
        element: <StudentEnrollClasses />,
      },
      {
        path: 'adminDashBoard',
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: 'allUser',
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: 'allClasses',
        element: (
          <AdminRoute>
            <AllClasses></AllClasses>
          </AdminRoute>
        ),
      },
      {
        path: 'pendingClasses',
        element: (
          <AdminRoute>
            <PendingClasses></PendingClasses>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
