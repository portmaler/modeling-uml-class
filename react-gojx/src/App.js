//import logo from './logo.svg';
import './App.css';
//import SignupForm from'./components/signupform';
import AddClass from'./components/AddClass';



function App() {
  const button1style = {
    backgroundColor: '#007bff',
    marginRight: '10px',
  };
  const button2style = {
    backgroundColor: '#2BAE66FF',
    marginRight: '10px',
  };
  const button3style = {
    backgroundColor: '#603F83FF',
  };
  return (
    <div className="App">
     <button class="formbold-btn" style={button1style}>Add Class</button>
     <button class="formbold-btn" style={button2style}>Update class</button>
     <button class="formbold-btn" style={button3style}>Add Association</button> 
<AddClass />
</div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
