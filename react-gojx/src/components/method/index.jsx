import React, { useState } from 'react'
import AddParameter from 'components/parameter';

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
   
   // const stringifiedValue = JSON.stringify(value).replace("\\", "");
  
  setparametrelist([...parametrelist,value]);
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
      parameters: parametrelist
    };
    sendMthodeData(methodData);
  };





  return (
    <div className="AddAttribute">

      <div class="formbold-input-flex">
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

      </div>

      <div class="formbold-input-flex">
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
      </div>
      <div>
            <button onClick={addChildparameter} class="btn icon-btn btn-info" href="#">
              <span class="glyphicon btn-glyphicon glyphicon-plus img-circle text-info"></span>
              Add Parameter
            </button></div>
      {addparameterlist.map((component, index) => {
        return (
          <div style={attnumstyle} key={index}>
           <h4>Parameter {index + 1}</h4> 
            {component}
          </div>
        );
      })}
      <button onClick={submitDtat} class="formbold-form-input addCostomButton2" >sent data method</button>
   

    </div>
  )
}

export default Addmethode
