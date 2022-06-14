import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './components/MainPage';
import About from './components/About';

function App() {
  return (
    <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
