import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <h1>Welcome</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
