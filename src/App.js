import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Recommendation from "./Pages/Recommendation";

import './app.scss';

function AppRoutes() {
  return (
    <Router>
      <div className="position-relative">
        <Routes>
          <Route path="/" Component={Home}>
          </Route>
          <Route path="/recommendation" Component={Recommendation}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

const App = () => <AppRoutes />;

export default App;
