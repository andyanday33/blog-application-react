import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App
