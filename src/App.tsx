import './App.scss';
import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom';
import { Container } from '@mui/material';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="App">
      
      <Container fixed>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <div className="area" >
              <ul className="circles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
        </div >
        
      </Container>
    </div>
  );
}

export default App;
