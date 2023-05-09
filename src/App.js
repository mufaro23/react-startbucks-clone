import React, { useEffect } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {auth} from "./utils/firebase";
import {login, logout, selectUser} from "./slices/userSlice";
import HomePage from "./pages/HomePage";
import AccountsPage from "./pages/AccountsPage";
import MenuPage from "./pages/MenuPage";
import FeaturedPage from "./pages/FeaturedPage";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/account/signin" element={<AccountsPage accountType="login" user={user} /> } />
          <Route exact path="/account/create" element={<AccountsPage accountType="signup" user={user} /> } />
          <Route exact path="/menu" element={<MenuPage user={user} /> } />
          <Route exact path="/menu/featured" element={<FeaturedPage />} />
        </Routes>
        <div style={{ backgroundColor: "black", color: "white", width: "100%", padding: "16px", display: "flex", justifyContent: "space-between"}}>
          <p></p>
          <p style={{ marginRight: "auto", marginLeft: "auto"}}>Developed by Mufaro Gomera</p>
        </div>
      </Router>
    </div>
  );
}

export default App;
