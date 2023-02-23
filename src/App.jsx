import Home from './Components/Home/Home';
import About from './Components/About/About';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import Projects from './Components/Projects/Projects';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
