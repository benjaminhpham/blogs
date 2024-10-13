import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>Pen & Pixel: Digital Stories 📖</h1>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">All Posts</Link>
          <Link to="/new">New</Link>
        </li>
      </ul>
    </nav>
  );
}
