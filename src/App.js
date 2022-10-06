import logo from './logo.svg';
import './App.css';
import { useSchemeContext } from './context/context';
import Navbar from './components/Navbar';

function App() {
  const {temp} = useSchemeContext();
  return (
    <div className="App">
      <Navbar/>

      
    </div>
  );
}

export default App;
