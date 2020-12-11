import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Carosel from "../Carosel/Carosel";
import Jumbo from "../Jumbo/Jumbo";
import Travel from "../Travel/Travel";
import Footer from "../Footer/Footer";
import "./App.css";
import ImageUpload from "../ImageUpload/ImageUpload";
import Destinations from "../Destinations/Destinations";
import Add from "../Add/Add";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Carosel />
            <Jumbo />
            <Travel />
            <Footer />
          </Route>
          <Route path="/destinations">
            <Header />
            <Destinations />
            <Footer />
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
            <Travel />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
