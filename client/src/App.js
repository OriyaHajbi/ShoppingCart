import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

//components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <Router>

      <Navbar />
      {/* */}
      {/* */}
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/cart' element={<CartScreen />} />

        </Routes>

      </main>
      {/* */}
      {/* */}
      {/* */}
    </Router>
  );
}

export default App;
