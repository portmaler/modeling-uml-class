import './App.css';
import AddPackage from './components/package';
import DiagramClass from './components/diagram';
import React,{useState} from 'react'
import DisplayXML from './components/treeview';





function App() {
 

  const [xmldata, setxmlData] = useState('');




  const handelXmlData  = (value) => {

    let str = '[{"key":1552, "name" : "my-class", "properties" :[], "methods":[{"name": "vcb ","parameters":[{" v ":"v bv"}], "visibility":"null" }]},{"key":1553, "name" : "my-class", "properties" :[], "methods":[{"name": "cccc","parameters":[{"cc":"ccc"}], "visibility":"null" }]}]';
        let strrr =  str.split(" ").join(""); 
        var nodedataa = JSON.parse(strrr );

  setxmlData(value);
  }

  return (
    <div className="App" class="splitcontainer">


<div class="splitleft" >

        <AddPackage sendXmlData={handelXmlData} xmlData={xmldata}/>
      </div>

      <div id="xmldata" class="splitright">
     
         <DisplayXML xmldatafromApp={xmldata} />
    

      </div>
      <div class="splitbottom" >
        <DiagramClass  />
       
      </div>
   

    </div>

  );
}

export default App;
