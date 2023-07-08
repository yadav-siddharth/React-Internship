import {Routes,Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Search from './components/Search/Search';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
