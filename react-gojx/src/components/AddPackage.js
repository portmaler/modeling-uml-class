import React, { Component } from "react";
import AddClass from './AddClass';
class AddPackage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addclassList: '',
        };
      }
    
    
      attnumstyle = {
        color: '#755139FF',
        marginleft: '10px',
      };


    state = {
        classData : ''
    }

    handleclassData = (value) => {
        this.setState({
            classData: value
          });
    };

    addChildClass = (e) => {
        e.preventDefault();
        this.setState({
            addclassList:  <AddClass  sendClassData={ this.handleclassData}/>,
          });
      };
  
    render() {
        return (<div className="AddPackage">



<div class="formbold-main-wrapper">
      <div class="formbold-form-wrapper">
        <img alt="" src="your-image-url-here.jpg" />


        <form >

        <div class="formbold-input-wrapp formbold-mb-3">
          <label for="firstname" class="formbold-form-label"> Module</label>
  
          <div>
            <input
              type="text"
              name="modulename"
              id="firstname"
              placeholder="module name"
              class="formbold-form-input"
            />
  
                <button class="formbold-form-input addCostomButton " >Add module</button>

                <div>
        
              <select class="formbold-form-input" name="choice">
                <option value="s1" selected>Class</option>
                <option value="s2" >Interface</option>


              </select>

            </div>
          </div>
        </div>

        <div class="formbold-input-wrapp formbold-mb-3">
          <label for="firstname" class="formbold-form-label"> Package</label>
  
          <div>
            <input
              type="text"
              name="modulename"
              id="firstname"
              placeholder="package name"
              class="formbold-form-input"
            />
  
                <button class="formbold-form-input addCostomButton " >Add package</button>

                <div>
        
              <select class="formbold-form-input" name="choice">
                <option value="s1" selected>Class</option>
                <option value="s2" >Interface</option>


              </select>

            </div>
          </div>
        </div>
        <div>       <button  onClick={this.addChildClass} class="formbold-btn button1style" >Add Class</button>
        <button class="formbold-btn button2style">Update class</button>
        <button class="formbold-btn button3style" >Add Association</button></div>
        </form>

   </div>
       
      
    </div>


{this.state.addclassList
          }
       
   
            </div>
        )


    }




}

export default AddPackage;