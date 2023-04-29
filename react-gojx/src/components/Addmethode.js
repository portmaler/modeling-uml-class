import React, { useState } from 'react'
import AddParameter from './AddParameter';

const Addmethode = ({ sendMthodeData }) => {

  const attnumstyle = {
    color: '#3C1053FF',
    marginleft: '10px',
  };

  const [addparameterlist, setaddparameterlist] = useState([]);
  const [parametrelist, setparametrelist] = useState([]);
  const [methodName, setMethodName] = useState('');
  const [methodReturnType, setMethodReturnType] = useState('');

 

  const handleParameter = (value) => {
   
    const stringifiedValue = JSON.stringify(value).replace("\\", "");
  
  setparametrelist([...parametrelist,stringifiedValue]);
  };

  const addChildparameter = (e) => {
    e.preventDefault();
    setaddparameterlist([...addparameterlist, <AddParameter key={addparameterlist.length} onAddParameter={handleParameter} />]);
  };


  const submitDtat = (e) => {
    e.preventDefault();
    const methodData = {
      name: methodName,
      type: methodReturnType,
      parameters: JSON.parse(parametrelist)
    };
    sendMthodeData(methodData);
  };





  return (
    <div className="AddAttribute">
      <div>{parametrelist}</div>
      <div> <ul>
        {parametrelist.map((parametre, index) => (
          <li key={index}>{JSON.stringify(parametre)}</li>
        ))}
      </ul></div>
      <div class="formbold-mb-3">
        <label for="age" class="formbold-form-label"> Methode name </label>
        <input
          type="text"
          name="methodename"
          id="methodename"
          placeholder="Attribute name"
          onChange={(e) => setMethodName(e.target.value)}
          class="formbold-form-input" />
      </div>
      <div><button onClick={addChildparameter} class="fa fa-plus" href='#'> add parametre</button></div>
      {addparameterlist.map((component, index) => {
        return (
          <div style={attnumstyle} key={index}>
            Parameter {index + 1}
            {component}
          </div>
        );
      })}
      <div class="formbold-mb-3">
        <label for="age" class="formbold-form-label"> Return Type</label>
        <input
          type="text"
          name="age"
          id="age"
          placeholder=" Return Type"
          onChange={(e) => setMethodReturnType(e.target.value)}
          class="formbold-form-input" />
      </div>
      <div class="formbold-mb-3">
        <label for="age" class="formbold-form-label"> Visibility </label>
        <select class="formbold-form-input" name="choice">
          <option value="s4" selected>default</option>
          <option value="s1">public</option>
          <option value="s2" >private</option>
          <option value="s3">protected</option>

        </select>
      </div>
      <div class="formbold-mb-3">
        <label for="age" class="formbold-form-label"> Default value</label>
        <input
          type="text"
          name="age"
          id="age"
          placeholder=" Default value"
          class="formbold-form-input" />
      </div>
      <button onClick={submitDtat}>sent data method</button>

    </div>
  )
}

export default Addmethode
