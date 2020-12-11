import "./App.css";
import Header from "../Header/Header";
import Carosel from "../Carosel/Carosel";
import Jumbo from "../Jumbo/Jumbo";
import Travel from "../Travel/Travel";
import Footer from "../Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Carosel />
      <Jumbo />
      <Travel />
      <Footer />
    </div>
  );
}

export default App;
