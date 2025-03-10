import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './Home';
import Github from './pages/Github';


createRoot(document.getElementById('root')!).render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/repos" element={<Github />} />

    </Routes>

  </BrowserRouter>,

)
