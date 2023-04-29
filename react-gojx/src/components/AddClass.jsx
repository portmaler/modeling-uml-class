import React, { useState } from 'react'
import axios from 'axios';
import AddAttribute from './AddAttribute';
import Addmethode from './Addmethode';

function AddClass() {
  const [addattributelist, setaddattributelist] = useState([]);
  const [addmethodlist, setmethodelist] = useState([]);
  const [className, setclassName] = useState('');
  const [classvisibility, setClassvisibility] = useState('');
  const [MethodData, setMethodData] = useState([]);
  const [AttributeData, setAttribute] = useState([]);
  const [classData, setclassData] = useState();
  //const [addMethodDataParam, setAddMethodDataParam] = useState([]);
  //const [methodData, setMethodData] = useState(null);


  const addChildAttribute = (e) => {
    e.preventDefault();
    setaddattributelist([...addattributelist, <AddAttribute sendAttributeData={handleAttributeData}/>]);
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
   
   const classData = {
      name: className,
      visibility: classvisibility,
      parent:5,
      properties:AttributeData,
      methodes: MethodData
    };
    setclassData(classData);
    console.log('AddMethod data:',classData);
    // TODO: Handle form submission with data from both components
  }


  //************************Api REquest */

  const [responseData, setResponseData] = useState(null);

  const handleClick = () => {
    handleSubmit();
    console.log(classData);
    /*const data = {
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
    };*/
    //const jsonclassdata = JSON.parse(classData);
    axios.post('http://127.0.0.1:8080/api/getdata', classData)
      .then((response) => {
        console.log(response);
        setResponseData(response.data);
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
    <div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <img alt="" src="your-image-url-here.jpg" />
        <button onClick={handleClick}>send request </button>
        <div>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>

        <div>{JSON.stringify(classData, null, 2)}</div>

        <form >
          <div class="formbold-input-wrapp formbold-mb-3">
            <label for="firstname" class="formbold-form-label"> Class Name </label>

            <div>
              <input
                type="text"
                name="classname"
                id="classname"
                placeholder="Class name"
                class="formbold-form-input"
                onChange={(e) => setclassName(e.target.value)}
              />

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
              <div style={attnumstyle} key={index}>
                Attribute {index + 1}
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
              <div style={attnumstyle} key={index}>
                Methode {index + 1}
                {component}
              </div>
            );
          })}
          <button onSubmit={handleClick} class="formbold-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddClass;
