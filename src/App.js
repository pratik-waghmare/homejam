import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import UnderConstruction from "./pages/UnderConstruction";

import { navbarLinks, sidebarLinks, iconLinks } from "./pages/Data";
import "./App.scss";

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/404" exact>
        <UnderConstruction />
      </Route>
    </Switch>
  );

  return (
    <Router>
      <div className="App">
        <Navbar
          navbarLinks={navbarLinks}
          sidebarLinks={sidebarLinks}
          iconLinks={iconLinks}
        />
        {routes}
      </div>
    </Router>
  );
}

export default App;
