

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/home';
import ArrayMethods from './components/Pages/ArrayMethods/arrayMethods';
import Functions from './components/Pages/Functions/functions';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/arrayMethods' element={<ArrayMethods/>}/>
          <Route path='/functions' element={<Functions/>}/>
      </Routes>
    </Router>
  );
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    //console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
})
const hiddenElemtns = document.querySelectorAll('.main');
hiddenElemtns.forEach((el) => observer.observe(el));

export default App;
