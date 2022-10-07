import logo from './logo.svg';
import './App.css';
import { useSchemeContext } from './context/context';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Section from './components/Section';

function App() {
  // const {temp} = useSchemeContext();
  return (
    <div className="App">
      {/* <> */}
      <Navbar />
      <Slider />
      {/* </> */}
      <div className="section">
        <Section />
      </div>

    </div>
  );
}

export default App;
