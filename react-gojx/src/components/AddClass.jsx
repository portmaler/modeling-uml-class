import React, { useState } from 'react'
import axios from 'axios';
import AddAttribute from './AddAttribute';
import Addmethode from './Addmethode';

function AddClass({sendClassData }) {
  const [addattributelist, setaddattributelist] = useState([]);
  const [addmethodlist, setmethodelist] = useState([]);
  const [packageName, setPackageName] = useState('');
  const [moduleName, setModuleName] = useState('');
  const [className, setclassName] = useState('');
  const [classvisibility, setClassvisibility] = useState('');
  const [MethodData, setMethodData] = useState([]);
  const [AttributeData, setAttribute] = useState([]);
  const [classData, setClassData] = useState('');
  //const [addMethodDataParam, setAddMethodDataParam] = useState([]);
  //const [methodData, setMethodData] = useState(null);


  const addChildAttribute = (e) => {
    e.preventDefault();
    setaddattributelist([...addattributelist, <AddAttribute sendAttributeData={handleAttributeData} />]);
  };

  const addChildMethode = (e) => {
    e.preventDefault();
    setmethodelist([...addmethodlist, <Addmethode key={addmethodlist.length}
      // setData={setData}
      sendMthodeData={handleMethodData}
    />]);
  };

  const handleMethodData = (value) => {
    setMethodData([...MethodData, value]);
  };
  const handleAttributeData = (value) => {
    setAttribute([...AttributeData, value]);
  };
  const handleSubmit = () => {
    //event.preventDefault();

    const classNam = 'my-class';
    const classvisibilit = 'visible';

    const classda = { name: classNam, visibility: classvisibilit, parent: 2, };
    const strindata = JSON.stringify(classda);
    const classd = JSON.parse(strindata);
    // Set the state variable to the classda object



    //console.log('AddMethod data:',classa);
    // TODO: Handle form submission with data from both components
  }


  //************************Api REquest */

  const [responseData, setResponseData] = useState(null);

  const handleClick = () => {
    handleSubmit();
    //console.log(classData);
    const data = {
      name: moduleName,
      packages: [
        {
          name: packageName,
          classes: [{
            name: className,
            visibility: classvisibility,
            parent: null,
            properties: [
              {
                name: 'brrr',
                type: 'string',
                visibility: 'public',
              },
            ],
            methods: [
              {
                name: 'eveer',
                type: 'eveer',
              },
            ],
          }
          ]
        }
      ]

    };
    //const jsonclassdata = JSON.parse(classData);
    axios.post('http://127.0.0.1:8080/api/addmodule',
      data
    )
      .then((response) => {
        console.log(response);
        setResponseData(response.data);
        setClassData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //************************************** */

  const attnumstyle = {
    color: '#755139FF',
    marginleft: '10px',
  };


  return (
  
      <div class="formbold-form-wrapper">
        <img alt="" src="your-image-url-here.jpg" />
        <button onClick={(event) => sendClassData(event,classData)}>getXmlData </button>
    

        <div>
          <pre>{JSON.stringify(classData, null, 2)}</pre>
        </div>

        <form >

    
          <div class="formbold-input-flex">
            <div>
              <label for="firstname" class="formbold-form-label"> Class Name </label>


              <input
                type="text"
                name="classname"
                id="classname"
                placeholder="Class name"
                class="formbold-form-input"
                onChange={(e) => setclassName(e.target.value)}
              />

            </div>

            <div>
              <label for="age" class="formbold-form-label">  Type </label>
              <select class="formbold-form-input" name="choice">
                <option value="s1" selected>Class</option>
                <option value="s2" >Interface</option>


              </select>

            </div>
          </div>

          <div class="formbold-input-wrapp formbold-mb-3">
            <label for="firstname" class="formbold-form-label"> Class Visibility </label>

            <div>
              <input
                type="text"
                name="classvisibility"
                id="classvisibility"
                placeholder="Class visibility"
                class="formbold-form-input"
                onChange={(e) => setClassvisibility(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button onClick={addChildAttribute} class="btn icon-btn btn-success" href="#">
              <span class="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>
              Add Attribute
            </button></div>
          {addattributelist.map((component, index) => {
            return (
              <div key={index}>
                <h3  style={attnumstyle} >  Attribute {index + 1}</h3>
                {component}
              </div>
            );
          })}
          <div>
            <button onClick={addChildMethode} class="btn icon-btn btn-success" href="#">
              <span class="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>
              Add Method
            </button>
          </div>
          {addmethodlist.map((component, index) => {
            return (
             

<div key={index}>
<h3  style={attnumstyle} >  Methode {index + 1}</h3>
{component}
</div>
            );
          })}
          <button class="formbold-btn">Submit</button>
        </form>

    </div>
  );
}

export default AddClass;
