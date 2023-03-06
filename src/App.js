import './App.css';
import Homepage from './components/js/Homepage';
import Aboutme from './components/js/pages/Aboutme';
import Posts from './components/js/pages/Posts';
import Category from './components/js/pages/Category';
import Search from './components/js/pages/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Homepage/>
    // </div>
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Homepage /> }></Route>
        <Route exact path="/aboutme" element={ <Aboutme/> }></Route>
        <Route exact path="/posts" element={ <Posts/> }></Route>
        <Route exact path="/category" element={ <Category/> }></Route>
        <Route exact path="/search" element={ <Search/> }></Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
