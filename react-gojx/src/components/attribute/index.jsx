import React, { useState } from 'react'
const AddAttribute = ({ sendAttributeData }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = (e) => {
    const attributeDataData = { name: name, type: type, visibility: '0' };
    e.preventDefault();
    sendAttributeData(attributeDataData); // Call onAddParameter function passed down from parent
    setName("");
    setType("");
  };
  return (
    <div className="AddAttribute">
      <div class="formbold-input-flex">
        <div>
          <label for="firstname" class="formbold-form-label"> Attribute Name </label>
          <input
            type="text"
            name="Attributename"
            id="Attributename"
            placeholder="Attribute name"
            class="formbold-form-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label for="age" class="formbold-form-label">  Type </label>
          <select class="formbold-form-input" name="choice" onChange={(e) => setType(e.target.value)}>
            <option value="s1">String</option>
            <option value="s2" selected>Integer</option>
            <option value="s3">Float</option>
            <option value="s4">Boolean</option>
          </select>
        </div>
      </div>
      <div class="formbold-input-wrapp formbold-mb-3">
        <label for="age" class="formbold-form-label"> Default value</label>
        <div>
          <input
            type="text"
            name="age"
            id="age"
            placeholder=" Default value"
            class="formbold-form-input" />
          <button onClick={handleSubmit} class="formbold-form-input addCostomButton " >Add Attribute</button>
        </div>
      </div>
    </div>
  )
}
export default AddAttribute
