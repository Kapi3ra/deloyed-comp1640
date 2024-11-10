import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Thêm Navigate

import Layout from './Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import LoginAdd from './Components/Login/LoginAdd';
import LoginManager from './Components/Login/LoginManager';

import TeacherDashboard from './Components/Teacher/TeacherDashboard';
import StudentDashboard from './Components/Student/StudentDashboard';
import StudentAdd from './Components/Student/StudentAdd';
import SupervisorDashboard from './Components/Supervisor/SupervisorDashboard';
import GuestDashboard from './Components/Guest/GuestDashboard';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import SidebarLeft from './Components/SidebarLeft';
import Subject from './Components/Teacher/Subject';
import NewSubject from './Components/Teacher/NewSubject';
import DepartmentDashboard from './Components/Department/DepartmentDashboard';
import DepartmentAdd from './Components/Department/DepartmentAdd';
import DepartmentEdit from './Components/Department/DepartmentEdit';
import GuestAdd from './Components/Guest/GuestAdd';
import GuestManager from './Components/Guest/GuestManager';
import GuestEdit from './Components/Guest/GuestEdit';

function App() {
  return (
    <BrowserRouter basename="/deloyed-comp1640"> {/* Thêm basename */}
      <Routes>
        {/* Chuyển hướng gốc ("/") đến trang đăng nhập */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Route cho trang đăng nhập không có layout */}
        <Route path="/login" element={<Login />} />
        
        {/* Route cho các trang khác sẽ bao gồm Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="loginadd" element={<LoginAdd />} />
          <Route path="loginmanager" element={<LoginManager />} />
          
          {/* Dashboard cho các vai trò */}
          <Route path="sidebarLeft" element={<SidebarLeft />} />
          <Route path="teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="student-dashboard" element={<StudentDashboard />} />
          <Route path="student-add" element={<StudentAdd />} /> 
          <Route path="subject" element={<Subject />} />
          <Route path="new-subject" element={<NewSubject />} />
          <Route path="supervisor-dashboard" element={<SupervisorDashboard />} />
          <Route path="guest-dashboard" element={<GuestDashboard />} />
          <Route path="department-dashboard" element={<DepartmentDashboard />} />
          <Route path="department-add" element={<DepartmentAdd />} />
          <Route path="department-edit/:id" element={<DepartmentEdit />} />
          <Route path="guestadd" element={<GuestAdd />} />
          <Route path="guestmanager" element={<GuestManager />} />
          <Route path="/guest-edit/:id" element={<GuestEdit />} />
          
          {/* Xử lý trang không tìm thấy */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
