import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import CardScreen from "./pages/CardScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <HomeScreen /> } />
          <Route path="/proposal" element={ <CardScreen /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
