import { Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './Pages/Registration';
import Category from './Pages/Category';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Registration/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/category' element={<Category/>} />
      </Routes>
    </div>
  );
}

export default App;
