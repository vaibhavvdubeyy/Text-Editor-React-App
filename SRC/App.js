
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar.js';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
    
   <Navbar/>
   <div className = "container my-3">
    <TextForm/>
    <About/>
   </div>
  </>
  );
}

export default App;
