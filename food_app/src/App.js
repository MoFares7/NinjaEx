import './App.css';
import HomePage from "./components/HomePage/HomePage";
import Navs from './components/Navs/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <HomePage />
      <Navs />
    </div>
  );
}

export default App;
