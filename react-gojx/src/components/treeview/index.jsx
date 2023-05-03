import { Component } from "react";
import jsonview from 'lib/treeview/json-view';

class DisplayXML extends Component {
    constructor(props) {
        super(props);
        this.getXmlData = this.getXmlData.bind(this);
    }
    getXmlData() {
        // let str = '[{"key":1552, "name" : "my-class", "properties" :[], "methods":[{"name": "vcb ","parameters":[{" v ":"v bv"}], "visibility":"null" }]},{"key":1553, "name" : "my-class", "properties" :[], "methods":[{"name": "cccc","parameters":[{"cc":"ccc"}], "visibility":"null" }]}]';
        let str='';
        if(this.props.xmldatafromApp!=''){
             str = this.props.xmldatafromApp;
             let strrr = str.split(" ").join("");
             var nodedataa = JSON.parse(strrr);
             const tree = jsonview.create(nodedataa);
             // window.addEventListener('DOMContentLoaded', (event) => {
             jsonview.render(tree, document.querySelector('.xmldisplay'));
             jsonview.expand(tree);
        }
        let data = require('./example2.json');
       // fetch('./example2.json')
       let parser = new DOMParser()
       let xmlDoc = parser.parseFromString(data, 'text/xml')
          const tree = jsonview.create(data);
          jsonview.render(tree, document.querySelector('.xmldisplay'));
          jsonview.expand(tree);
       
      
       
        // });
    }
    render() {

        // this.getXmlData()

        /*  fetch('example2.json')
          .then((res)=> {
            return res.text();
          })
          .then((data) => {
            const tree = jsonview.create(data);
            jsonview.render(tree, document.querySelector('.root'));
            jsonview.expand(tree);
          })
          .catch((err) => {
            console.log(err);
          })*/
        return (
            <div class="xmldisplay">
                <button onClick={this.getXmlData}>get XMl Data</button>
            </div>
        );
    }
}

export default DisplayXML;