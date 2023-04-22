

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/home';
import Concept from './components/Pages/Concept/concept'


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/concepts' element={<Concept/>}/>
      </Routes>
    </Router>
  );
}

export default App;
