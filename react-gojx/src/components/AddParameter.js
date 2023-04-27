import React from 'react'

const AddParameter = props => {
  return (
    <div class="formbold-mb-3 formbold-input-wrapp">
          <div>
            <input
              type="text"
              name="areacode"
              id="areacode"
              placeholder="Name"
              class="formbold-form-input formbold-w-45"
            />
  
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Type"
              class="formbold-form-input"
            />
          </div>
        </div>
  )
}


export default AddParameter
