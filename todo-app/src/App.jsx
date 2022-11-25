import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Todo from './components/Todo-section/Todo';
// import Progress from './components/Progress-section/Progress';
import "./components/FontAwesome"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <div className="app">

    </div> */}
      <Sidebar />
      <Todo/>
      {/* <Progress/> */}
      <BrowserRouter>
        <Routes>
          {/* link to / */}

          <Route path="../src/Pages/profile/index.jsx" element={<Sidebar />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
