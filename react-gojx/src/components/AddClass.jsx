import React, {useState} from 'react'
import AddAttribute from './AddAttribute';
import Addmethode from './Addmethode';

 function AddClass() {
  const [addattributelist, setaddattributelist] = useState([]);

  const addChildAttribute = (e) => {
    e.preventDefault();
    setaddattributelist([...addattributelist, <AddAttribute />]);
  };

  const [addmethodlist, setmethodelist] = useState([]);

  const addChildMethode = (e) => {
    e.preventDefault();
    setmethodelist([...addmethodlist, <Addmethode/>]);
  };

  const attnumstyle = {
    color: '#755139FF',
    marginleft: '10px',
  };

  

  return (
    <div class="formbold-main-wrapper">
    <div class="formbold-form-wrapper">
           <img alt="" src="your-image-url-here.jpg"/>
      <form action="https://formbold.com/s/FORM_ID" method="POST">
         <div class="formbold-input-wrapp formbold-mb-3">
          <label for="firstname" class="formbold-form-label"> Class Name </label>
  
          <div>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Class name"
              class="formbold-form-input"
            />
  
           
          </div>
        </div>
        <div>
        <button  onClick={addChildAttribute}  class="btn icon-btn btn-success" href="#">
<span class="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>
Add Attribute
</button></div>
{addattributelist.map((component, index) => {
  return (
    <div style= {attnumstyle} key={index}>
      Attribute {index + 1 }
      {component}
    </div>
  );
})}
<div>
       <button onClick={addChildMethode}  class="btn icon-btn btn-success" href="#">
<span class="glyphicon btn-glyphicon glyphicon-plus img-circle text-success"></span>
Add Method
</button>
</div>
{addmethodlist.map((component, index) => {
  return (
    <div style= {attnumstyle} key={index}>
      Methode {index + 1 }
      {component}
    </div>
  );
})}

  
        <button class="formbold-btn">Submit</button>
      </form>
    </div>
  </div>
  );
}

export default AddClass;
