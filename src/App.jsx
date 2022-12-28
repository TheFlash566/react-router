import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Skills from './pages/Skills';
import LearnMore from './pages/LearnMore';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path='skills' element={< Skills/>} />
            <Route path='learnMore' element={< LearnMore/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes> 
    </BrowserRouter>
  )
}

export default App
