import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/dashboard/Orders";
import Prescriptions from "../pages/dashboard/Prescriptions";
import Profile from "../pages/dashboard/Profile";
import MedicineSearch from "../pages/dashboard/MedicineSearch";
import MedicineDetails from "../pages/dashboard/MedicineDetails";
import OrderCheckout from "../pages/dashboard/OrderCheckout";
import TrackOrder from "../pages/dashboard/TrackOrder";
import OrderHistory from "../pages/dashboard/OrderHistory";
import Notifications from "../pages/dashboard/Notifications";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import PasswordResetRequest from "../pages/auth/PasswordResetRequest";
import PasswordResetForm from "../pages/auth/PasswordResetForm";
import PharmacyDashboard from "../pages/pharmacy/PharmacyDashboard";

import ManageMedicines from "../pages/pharmacy/ManageMedicines";
import ManageOrders from "../pages/pharmacy/ManageOrders";
import ViewPrescriptions from "../pages/pharmacy/ViewPrescriptions";
import PharmacyNotifications from "../pages/pharmacy/PharmacyNotifications";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import RegisterPharmacy from "../pages/admin/RegisterPharmacy";
import RegisterDeliveryPerson from "../pages/admin/RegisterDeliveryPerson";
import GenerateReports from "../pages/admin/GenerateReports";
import PasswordPolicy from "../pages/admin/PasswordPolicy";
import SessionTimeout from "../pages/admin/SessionTimeout";
import SystemLog from "../pages/admin/SystemLog";
import AdminNotifications from "../pages/admin/AdminNotifications";












const AppRoutes = () => {
  return (
    <Routes>
      {/* Landing Page & Auth */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password-reset" element={<PasswordResetRequest />} />
      <Route path="/password-reset-form" element={<PasswordResetForm />} />




      {/* Dashboard with Nested Routes */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="orders" element={<Orders />} />
        <Route path="prescriptions" element={<Prescriptions />} />
        <Route path="profile" element={<Profile />} />
        <Route path="medicine-search" element={<MedicineSearch />} />
        <Route path="/dashboard/medicine-details/:id" element={<MedicineDetails />} />
        <Route path="/dashboard/order-checkout/:id" element={<OrderCheckout />} />
        <Route path="/dashboard/track-order" element={<TrackOrder />} />
        <Route path="/dashboard/order-history" element={<OrderHistory />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/update-profile" element={<UpdateProfile />} />
      </Route>

      {/* Pharmacy Dashboard routes */}
      <Route path="/pharmacy/dashboard" element={<PharmacyDashboard />}>
        <Route path="/pharmacy/dashboard/medicines" element={<ManageMedicines />} />
        <Route path="/pharmacy/dashboard/orders" element={<ManageOrders />} />
        <Route path="/pharmacy/dashboard/prescriptions" element={<ViewPrescriptions />} />
        <Route path="/pharmacy/dashboard/notifications" element={<PharmacyNotifications />} />
      </Route>

              {/* Admin Dashboard routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />}>
        <Route path="/admin/dashboard/users" element={<ManageUsers />} />
        <Route path="/admin/dashboard/pharmacies" element={<RegisterPharmacy />} />
        <Route path="/admin/dashboard/delivery" element={<RegisterDeliveryPerson />} />
        <Route path="/admin/dashboard/reports" element={<GenerateReports />} />
        <Route path="/admin/dashboard/password-policy" element={<PasswordPolicy />} />
        <Route path="/admin/dashboard/session-timeout" element={<SessionTimeout />} />
        <Route path="/admin/dashboard/logs" element={<SystemLog />} />
        <Route path="/admin/dashboard/notifications" element={<AdminNotifications />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;

