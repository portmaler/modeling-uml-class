import React, { useState } from 'react'

const AddParameter = ({ onAddParameter }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    const attributeDataData = {name:'name',type:'type'};
    console.log(attributeDataData+name+type)
    e.preventDefault();
    onAddParameter(attributeDataData); // Call onAddParameter function passed down from parent
    setName("");
    setType("");
  };

  return (
    <div class="formbold-mb-3 formbold-input-wrapp">
      <div>
        <input
          type="text"
          name="areacode"
          id="areacode"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          class="formbold-form-input formbold-w-45"
        />

        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Type"
          onChange={(e) => setType(e.target.value)}
          class="formbold-form-input"
        />
      </div>
      <button onClick={handleSubmit}>add param h</button>
    </div>
  )
}


export default AddParameter
