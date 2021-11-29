import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "../pages/Home";
import Convert from "../pages/Convert";
import List from "../pages/List";
import Error404 from "../pages/Error404";

const Navbar = () => {
  return (
    <div>
      <h2>Special use of HashRouter</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/convert">Money Converter</Link>
          <Link to="/list">Live Exchange Rates</Link>
        </nav>
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/convert" component={<Convert />} />
          <Route path="/list" component={<List />} />
          <Route path="*" component={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Navbar;
