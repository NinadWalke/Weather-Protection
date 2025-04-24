import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProtectedRoute({ children }) {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("http://localhost:8080/auth", null, { withCredentials: true })
      .then(res => {
        if (!res.data.authenticated) {
          navigate("/login");
        } else {
          setCheckingAuth(false);
        }
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  if (checkingAuth) return <div>Checking authentication...</div>;

  return children;
}
