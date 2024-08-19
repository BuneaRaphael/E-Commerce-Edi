import { useCart } from "../../context/CartContext";
import "./logout.scss";
const LogoutButton = () => {
  const { handleLogout } = useCart();

  const onLogout = () => {
    handleLogout();
    // Additional actions if needed, e.g., showing a notification
  };

  return (
    <button className="logout-button" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
