import React from 'react'

const AddAttribute = () => {
    return (
        <div className="AddAttribute">
            <div class="formbold-mb-3">
                <label for="age" class="formbold-form-label"> Attribute name </label>
                <input
                    type="text"
                    name="age"
                    id="age"
                    placeholder="Attribute name"
                    class="formbold-form-input" />
            </div>
            <div class="formbold-mb-3">
                <label for="age" class="formbold-form-label"> Attribute type </label>
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
        </div>
    )
}

export default AddAttribute
