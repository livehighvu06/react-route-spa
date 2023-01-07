import Link from "./conponents/Link";
import Route from "./routes/Route";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <div>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    </div>
  );
};

export default App;
