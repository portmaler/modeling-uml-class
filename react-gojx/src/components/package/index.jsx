import React, { useState, useEffect } from "react";
import AddClass from "components/class";
import AddAssociation from "components/association";
import axios from "axios";
import useModuleService from "hooks/usemodule";
import usePackageService from "hooks/usepackage";

function AddPackage(props) {
  const [moduleName, setModuleName] = useState("");
  const [packageName, setPackageName] = useState("");
  const [addclassList, setAddClassList] = useState("");
  const [classData, setClassData] = useState([]);
  const [modules, setModules] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [indexModuleSelected, setIndexModuleSelected] = useState();
  const [indexPackageSelected, setIndexPackageSelected] = useState();
  const getModules = useModuleService().getModules;
  const getAllPackageByModule = usePackageService().getPackagesByModule;

  async function handleSelectModule(event) {
    const indexSelected = event.target.selectedIndex;
    setIndexModuleSelected(indexSelected);
    setLoading(true);
    try {
      const data = await getAllPackageByModule(indexModuleSelected);
      setPackages(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }
  async function handleSelectPackage(event) {
    const indexPackageSelected = event.target.selectedIndex;
    setIndexPackageSelected(indexPackageSelected);

  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getModules();
        setModules(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  /* function fetchAllModules() {
     setLoading(true);
     getModuls()
       .then(data => {
         setModules(data);
         setLoading(false);
       })
       .catch(error => {
         setError(error);
         setLoading(false);
       });
   }*/
  //useEffect(() => {fetchAllModules()})

  function renderModules() {
    if (modules.length = 0) {
      return <p>No found</p>;
    }
    return (
      <select className="formbold-form-input" name="choice">
        {modules.map((module) => (
          <option key={module.id} value={module.id} selected>
            {module.name}
          </option>
        ))}
      </select>
    );
  }

  const attnumstyle = {
    color: "#755139FF",
    marginleft: "10px",
  };

  function handleclassData(value) {
    setClassData((prevState) => [...prevState, value]);
  }

  function getmodulData() {
    const data = {
      name: moduleName,
      packages: [
        {
          name: packageName,
          classes: classData,
        },
      ],
    };

    props.sendXmlData(data);
  }

  function addChildClass(e) {
    e.preventDefault();
    setAddClassList(<AddClass sendClassData={handleclassData} />);
  }

  function addChildAssociaiton(e) {
    e.preventDefault();
    setAddClassList(<AddAssociation allclasses={packages[0]?.classes ?? []} indexModule={indexModuleSelected}/>);
  }

  function sendModuleToApi() {
    const data = {
      name: moduleName,
      packages: [
        {
          name: packageName,
          classes: classData,
        },
      ],
    };

    axios
      .post("http://127.0.0.1:8080/api/addmodule", data)
      .then((response) => {
        console.log(response);
        props.sendXmlData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  return (
    <div className="AddPackage">
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <img alt="" src="your-image-url-here.jpg" />

          <div>index:{indexModuleSelected}</div>
          <div>
            <pre>{JSON.stringify(props.xmlData, null, 2)}</pre>
          </div>
          <div>
            <pre>{JSON.stringify(packages, null, 2)}</pre>
          </div>
          <div className="formbold-input-wrapp formbold-mb-3">
            <label htmlFor="firstname" className="formbold-form-label">
              {" "}
              Module
            </label>

            <div>
              <input
                type="text"
                name="modulename"
                id="firstname"
                placeholder="module name"
                className="formbold-form-input"
                onChange={(e) => setModuleName(e.target.value)}
              />



              <button onClick={(event) => sendModuleToApi(event)} class="formbold-form-input addCostomButton " >Add module</button>

            </div>
          </div>
          <div class="formbold-input-wrapp formbold-mb-3">
            <div>
            {!modules ||modules.length === 0 && <p>0</p>}
              <select onChange={handleSelectModule} className="formbold-form-input" name="choice">
                { modules && modules.map((module) => (
                  <option key={module.id} value={module.name}>
                    {module.name}
                  </option>
                ))}
              </select>

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
                onChange={(e) => setPackageName(e.target.value)}
              />

              <button class="formbold-form-input addCostomButton " >Add package</button>

             
            </div>
          </div>
          <div class="formbold-input-wrapp formbold-mb-3">
            <div>

       
            <select onChange={handleSelectPackage} className="formbold-form-input" name="choice"> 
            {packages && packages.map((pack) => (<option key={pack.id} value={pack.name}> {pack.name} </option>))} </select>

            </div>
          </div>
          <div>       <button onClick={addChildClass} class="formbold-btn button1style" >Add Class</button>
            <button class="formbold-btn button2style">Update class</button>
            <button onClick={addChildAssociaiton} class="formbold-btn button3style" >Add Association</button></div>


        </div>


      </div>


      {addclassList
      }


    </div>
  )


}






export default AddPackage;