import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header";
import ImageUpload from "../ImageUpload/ImageUpload";
import Carosel from "../Carosel/Carosel";
import Jumbo from "../Jumbo/Jumbo";
import Footer from "../Footer/Footer";
import "./App.css";

import Add from "../Add/Add";

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
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/">
            <Header />
            <Carosel />
            <Jumbo />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
