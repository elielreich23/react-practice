import './App.scss';
import Index from './components/sidebar/Index';
import "./components/FontAwesome"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <div className="app">

    </div> */}
      <Index />
        <BrowserRouter>
          <Routes>
            <Route path="../src/Pages/profile/index.jsx" element={<Index/>}/> 

          </Routes>
        </BrowserRouter>

      
    </>
  );
}

export default App;
