import Link from "./conponents/Link";
import Route from "./routes/Route";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const App = () => {
  return (
    <div>
      {process.env.REACT_APP_NOT_SECRET_CODE}
      <Link to="/react-route-spa/">Home</Link>
      <Link to="/react-route-spa/about">About</Link>
      <Link to="/react-route-spa/contact">Contact</Link>

      <div>
        <Route path="/react-route-spa/">
          <Home />
        </Route>
        <Route path="/react-route-spa//about">
          <About />
        </Route>
        <Route path="/react-route-spa//contact">
          <Contact />
        </Route>
      </div>
    </div>
  );
};

export default App;
