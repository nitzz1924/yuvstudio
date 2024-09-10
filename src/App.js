import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./pages/HomePage/HeroSection";
import Canvas from "./components/canvas";
import Header from "./components/header";
import Home from "./pages/HomePage/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
function App() {
  return (
    <div className="App">
      <Canvas />
      <Header />
      <Home/>
    </div>
  );
}

export default App;
