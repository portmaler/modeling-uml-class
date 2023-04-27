import React,{useState} from 'react'
import AddParameter from './AddParameter';

const Addmethode = () => {
   /* const Input = () => {
        return <div class="formbold-mb-3 formbold-input-wrapp">
          <label for="phone" class="formbold-form-label"> Phone </label>
  
          <div>
            <input
              type="text"
              name="areacode"
              id="areacode"
              placeholder="Area code"
              class="formbold-form-input formbold-w-45"
            />
  
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone number"
              class="formbold-form-input"
            />
          </div>
        </div>;
      };
*/
    const [addparameterlist, setaddparameterlist] = useState([]);

    const addChildparameter = (e) => {
      e.preventDefault();
      setaddparameterlist([...addparameterlist, <AddParameter />]);
    };
    const attnumstyle = {
        color: '#3C1053FF',
        marginleft: '10px',
      };
    

  

    
  return (
    <div className="AddAttribute">
            <div class="formbold-mb-3">
                <label for="age" class="formbold-form-label"> Methode name </label>
                <input
                    type="text"
                    name="age"
                    id="age"
                    placeholder="Attribute name"
                    class="formbold-form-input" />
            </div>
            <div><button  onClick={addChildparameter}  class="fa fa-plus" href='#'> add parametre</button></div>
            {addparameterlist.map((component, index) => {
  return (
    <div style= {attnumstyle} key={index}>
      Parameter {index + 1 }
      {component}
    </div>
  );
})}
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
  )
}

export default Addmethode
