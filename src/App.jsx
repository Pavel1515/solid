import { Route, Router, Routes } from "@gh0st-work/solid-js-router";
import Cart from "./componets/Cart";
import Contact from "./componets/Contact";
import Home from "./componets/Home";
import Reviews from "./componets/Reviews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/home"} fallback={true}>
          <Home />
        </Route>
        <Route path={"/cart"}>
          <Cart />
        </Route>
        <Route path={"/contact"}>
          <Contact />
        </Route>
        <Route path={"/revies"}>
          <Reviews />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
