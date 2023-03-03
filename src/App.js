import './App.css';
import Header from './components/js/Header';
import Main from './components/js/Main';
import Footer from './components/js/Footer';
import Sidebar from './components/js/Sidebar';
import Profile from './components/js/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Profile/>
        
        {/* <img src="./images/yang01.jpg" className="App-logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Footer/>
    </div>
  );
}

export default App;
