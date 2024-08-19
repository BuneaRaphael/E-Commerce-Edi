import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogoutButton from "../../components/logout/Logout";
import "./account.scss";
const Account = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/"); // Redirect to home if not logged in
        }

        const response = await axios.get("http://localhost:8800/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
        navigate("/"); // Redirect to home on error
      }
    };

    fetchUserInfo();
  }, [navigate]);

  return (
    <div className="account-page">
      {userInfo ? (
        <div>
          <h1>Welcome, {userInfo.username}!</h1>
          <p>Email: {userInfo.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <LogoutButton />
    </div>
  );
};

export default Account;
