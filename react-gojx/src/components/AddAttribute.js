import React, { useState } from 'react'

const AddAttribute = ({sendAttributeData}) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
  
    const handleSubmit = (e) => {
        const attributeDataData = {name:name,type:type,visibility:'0'};
      e.preventDefault();
      sendAttributeData(attributeDataData); // Call onAddParameter function passed down from parent
      setName("");
      setType("");
    };

    return (
        <div className="AddAttribute">
            <div class="formbold-mb-3">
                <label for="age" class="formbold-form-label"> Attribute name </label>
                <input
                    type="text"
                    name="age"
                    id="age"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Attribute name"
                    class="formbold-form-input" />
            </div>
            <div class="formbold-mb-3">
                <label for="age" class="formbold-form-label" onChange={(e) => setType(e.target.value)}> Attribute type </label>
                <select class="formbold-form-input" name="choice">
                    <option value="s1">String</option>
                    <option value="s2" selected>Integer</option>
                    <option value="s3">Float</option>
                    <option value="s4">Boolean</option>
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
            <button onClick={handleSubmit}> submitattribute</button>
        </div>
    )
}

export default AddAttribute
