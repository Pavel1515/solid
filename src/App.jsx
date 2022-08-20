import { Route, Router, Routes } from "@gh0st-work/solid-js-router";
import Cart from "./componets/Cart";
import Home from "./componets/Home";

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
      </Routes>
    </Router>
  );
}

export default App;
