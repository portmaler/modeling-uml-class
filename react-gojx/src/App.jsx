import './App.css';
import AddPackage from './components/AddPackage';
import DiagramClass from './components/DiagramClass';
import React from 'react'




function App() {

  


  return (
    <div className="App" class="splitcontainer">


<div class="splitleft" >

        <AddPackage/>
      </div>

      <div id="xmldata" class="splitright">
     
         
         "xmldata"

      </div>
      <div class="splitbottom" >
        <DiagramClass />
      </div>
   

    </div>

  );
}

export default App;
