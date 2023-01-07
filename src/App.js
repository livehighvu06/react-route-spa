import Link from "./conponents/Link";
import Route from "./routes/Route";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const App = () => {
  return (
    <div>
      <Link to="/react-spa-wthout-react-router/">Home</Link>
      <Link to="/react-spa-wthout-react-router/about">About</Link>
      <Link to="/react-spa-wthout-react-router/contact">Contact</Link>

      <div>
        <Route path="/react-spa-wthout-react-router/">
          <Home />
        </Route>
        <Route path="/react-spa-wthout-react-router/about">
          <About />
        </Route>
        <Route path="/react-spa-wthout-react-router/contact">
          <Contact />
        </Route>
      </div>
    </div>
  );
};

export default App;
