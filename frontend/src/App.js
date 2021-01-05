import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CounsellorScreen from "./screens/CounsellorScreen";
import IndividualScreen from "./screens/IndividualScreen";

import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BookingScreen from "./screens/BookingScreen";
import SessionBookingScreen from "./screens/SessionBookingScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UsersListScreen from "./screens/UsersListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import CounsellorListScreen from "./screens/CounsellorsListScreen";
import CounsellorEditScreen from "./screens/CounsellorEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import DashboardScreen from "./screens/DashboardScreen";
import AdminDashboardScreen from "./screens/AdminDashboardScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/bespeaking" component={PlaceOrderScreen} />
          <Route path="/confirm" component={BookingScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={SigninScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/counsellor/:id" component={IndividualScreen} />
          <Route path="/sessions/:id?" component={SessionBookingScreen} />
          <Route path="/admin/userlist" component={UsersListScreen} />
          <Route
            path="/admin/counsellorlist"
            component={CounsellorListScreen}
          />

          <Route
            path="/admin/counsellor/:id/edit"
            component={CounsellorEditScreen}
          />

          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/users/:id/edit" component={UserEditScreen} />
          <Route path="/dashboard" component={DashboardScreen} />
          <Route path="/admin_dashboard" component={AdminDashboardScreen} />

          <Route path="/" component={CounsellorScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
