import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/app.page'
import './assets/index.css'
import Characters from './pages/characters.page';
import Error from './pages/error.page';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </StrictMode>,
)
