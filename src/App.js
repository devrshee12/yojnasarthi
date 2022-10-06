import logo from './logo.svg';
import './App.css';
import { useSchemeContext } from './context/context';

function App() {
  const {temp} = useSchemeContext();
  return (
    <div className="App">
      <h1 className='mx-100 w-[100%] border-2 border-solid border-black'>{temp}</h1>
      
    </div>
  );
}

export default App;
