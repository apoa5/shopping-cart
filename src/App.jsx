import { Link, Outlet } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <div>
      <div className="header">
        <h1>Fake Store</h1>
        <nav className="header-links">
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>



      <Outlet />
    </div>
  );
}
