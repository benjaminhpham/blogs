import "./App.css";
import NavBar from "./components/NavBar";
import AllPosts from "./pages/AllPosts";
import EditPost from "./pages/EditPost";
import NewPost from "./pages/NewPost";
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <AllPosts />,
    },
    {
      path: "/new",
      element: <NewPost />,
    },
    {
      path: "/edit/:id",
      element: <EditPost />,
    },
  ]);
  return (
    <div className="app-main">
      <header>
        <NavBar />
      </header>
      {element}
    </div>
  );
}

export default App;
