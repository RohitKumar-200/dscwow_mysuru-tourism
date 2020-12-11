import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header";
import ImageUpload from "../ImageUpload/ImageUpload";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/upload">
            <ImageUpload />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
