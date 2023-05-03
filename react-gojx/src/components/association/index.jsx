import React, { useState } from 'react';
import useModuleService from "hooks/usemodule";
const AddAssociation = ({ allclasses,indexModule}) => {
const [resp,setResp] = useState('');
const [classCible, setClassCible] = useState('');
const [classSource, setClassSource] = useState('');
const [associationType, setAssociationType] = useState('Agregation');
const [multiplicityCible, setmultiplicityCible] = useState('One');
const [multiplicitySource, setmultiplicitySource] = useState('One');
  const createLink = useModuleService().createlinkOnModule;



  async function handleCreatlink(event) {
/*
    const data = {
      idModule: indexModule,
      source: classSource,
cible: classCible,
associationType:associationType,
multiplicitySource: multiplicitySource,
  multiplicityCible:multiplicityCible

  };
  */
  const data = {
    idModule: 1,
    source: 1,
cible: 2,
associationType:associationType,
multiplicitySource: multiplicitySource,
multiplicityCible:multiplicityCible

};
  
    try {
      const dataa = await createLink(data);
      setResp(dataa);
    } catch (error) {
  
    }
  }
  
  async function handleClassSource(event) {
    const indexSelected = event.target.selectedIndex;
    setClassSource(indexSelected);

  }
  async function handleClasCible(event) {
    const indexSelected = event.target.selectedIndex;
    setClassCible(indexSelected);

  }
  async function handleMultiplicSource(event) {
    const indexSelected = event.target.selectedIndex;
    setmultiplicitySource(indexSelected);

  }
  async function handleMultiplicEnd(event) {
    const indexSelected = event.target.selectedIndex;
    setmultiplicityCible(indexSelected);

  }
  async function handleSelectType(event) {
    const indexSelected = event.target.value;
    setAssociationType(indexSelected);

  }
  return (
    <div className="formbold-form-wrapper">
           <div>module : {indexModule}</div>
           <div>class source: {classCible}</div>
           <div>class cible: {classSource}</div>
           <div>type: {associationType}</div>
           <div>ass source: {multiplicitySource}</div>
           <div>ass cible: {multiplicityCible}</div>
         <div>{JSON.stringify(resp)}</div>
      <div className="formbold-input-flex">
     
        <div>
          <label htmlFor="classname" className="formbold-form-label">Class Source</label>
          <select  onChange={handleClassSource} className="formbold-form-input" name="choice"> 
            {allclasses && allclasses.map((clas) => (<option key={clas.id} value={clas.name}> {clas.name} </option>))}
          </select>
        </div>
        <div>
          <label htmlFor="choice" className="formbold-form-label">Multiplicity End</label>
          <select  onChange={handleClasCible} className="formbold-form-input" name="choice">
            <option value="s1" selected>one</option>
            <option value="s2">multiple</option>
          </select>
        </div>
      </div>
      <div className="formbold-input-flex">
        <div>
          <label htmlFor="choice" className="formbold-form-label">Class End</label>
          <select  onChange={handleMultiplicSource} className="formbold-form-input" name="choice"> 
            {allclasses && allclasses.map((clas) => (<option key={clas.id} value={clas.name}> {clas.name} </option>))}
          </select>
        </div>
        <div>
          <label htmlFor="choice" className="formbold-form-label">Multiplicity End</label>
          <select onChange={handleMultiplicEnd}  className="formbold-form-input" name="choice">
            <option value="s1" selected>one</option>
            <option value="s2">multiple</option>
          </select>
        </div>
      </div>
      <div className="formbold-input-wrapp formbold-mb-3">
        <label htmlFor="firstname" className="formbold-form-label">Association type</label>
        <div>
        <select onChange={handleSelectType} className="formbold-form-input" name="choice">
            <option value="Aggregation" selected>Aggregation</option>
            <option value="Composition">Composition</option>
          </select>
          <button onClick={handleCreatlink} className="formbold-form-input addCostomButton " >Add Association</button>
        </div>
      </div>
    </div>
  );
}

export default AddAssociation;
