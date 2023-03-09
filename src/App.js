import './App.css';
import Homepage from './components/js/Homepage';
import Aboutme from './components/js/pages/Aboutme';
import Posts from './components/js/pages/Posts';
import Category from './components/js/pages/Category';
import Search from './components/js/pages/Search';
import Mdpost from './components/js/pages/Mdpost';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Homepage/>
    // </div>
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Homepage /> } />
        <Route exact path="/aboutme" element={ <Aboutme/> } />
        <Route exact path="/post" element={ <Posts/> }></Route>
        <Route exact path="/post/test" element={ <Mdpost />} />
        
        <Route exact path="/category" element={ <Category/> } />
        <Route exact path="/search" element={ <Search/> } />
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
