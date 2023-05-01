import React from 'react';

import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

import '../App.css';  // contains .diagram-component CSS

// ...

/**
 * Diagram initialization method, which is passed to the ReactDiagram component.
 * This method is responsible for making the diagram and initializing the model and any templates.
 * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
 */
function initDiagram() {


    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram =
        $(go.Diagram,
            {
                "undoManager.isEnabled": true,
                layout: $(go.TreeLayout,
                    { // this only lays out in trees nodes connected by "generalization" links
                        angle: 90,
                        path: go.TreeLayout.PathSource,  // links go from child to parent
                        setsPortSpot: false,  // keep Spot.AllSides for link connection spot
                        setsChildPortSpot: false,  // keep Spot.AllSides
                        // nodes not connected by "generalization" links are laid out horizontally
                        arrangement: go.TreeLayout.ArrangementHorizontal
                    }),

                    model : new go.GraphLinksModel(
                        {
                            linkKeyProperty: 'key' 
                 
                        })

            });


    // show visibility or access as a single character at the beginning of each property or method
    function convertVisibility(v) {
        switch (v) {
            case "public": return "+";
            case "private": return "-";
            case "protected": return "#";
            case "package": return "~";
            default: return v;
        }
    }

    // the item template for properties
    var propertyTemplate =
        $(go.Panel, "Horizontal",
            // property visibility/access
            $(go.TextBlock,
                { isMultiline: false, editable: false, width: 12 },
                new go.Binding("text", "visibility", convertVisibility)),
            // property name, underlined if scope=="class" to indicate static property
            $(go.TextBlock,
                { isMultiline: false, editable: true },
                new go.Binding("text", "name").makeTwoWay(),
                new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
            // property type, if known
            $(go.TextBlock, "",
                new go.Binding("text", "type", t => t ? ": " : "")),
            $(go.TextBlock,
                { isMultiline: false, editable: true },
                new go.Binding("text", "type").makeTwoWay()),
            // property default value, if any
            $(go.TextBlock,
                { isMultiline: false, editable: false },
                new go.Binding("text", "default", s => s ? " = " + s : ""))
        );

    // the item template for methods
    var methodTemplate =
        $(go.Panel, "Horizontal",
            // method visibility/access
            $(go.TextBlock,
                { isMultiline: false, editable: false, width: 12 },
                new go.Binding("text", "visibility", convertVisibility)),
            // method name, underlined if scope=="class" to indicate static method
            $(go.TextBlock,
                { isMultiline: false, editable: true },
                new go.Binding("text", "name").makeTwoWay(),
                new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
            // method parameters
            $(go.TextBlock, "()",
                // this does not permit adding/editing/removing of parameters via inplace edits
                new go.Binding("text", "parameters", parr => {
                    var s = "(";
                    for (var i = 0; i < parr.length; i++) {
                        var param = parr[i];
                        if (i > 0) s += ", ";
                        s += param.name + ": " + param.type;
                    }
                    return s + ")";
                })),
            // method return type, if any
            $(go.TextBlock, "",
                new go.Binding("text", "type", t => t ? ": " : "")),
            $(go.TextBlock,
                { isMultiline: false, editable: true },
                new go.Binding("text", "type").makeTwoWay())
        );


    // define a simple Node template
    diagram.nodeTemplate =
        $(go.Node, "Auto",
            {
                locationSpot: go.Spot.Center,
                fromSpot: go.Spot.AllSides,
                toSpot: go.Spot.AllSides
            },

            $(go.Shape, { fill: "lightyellow" }),
            $(go.Panel, "Table",
                { defaultRowSeparatorStroke: "black" },
                // header
                $(go.TextBlock,
                    {
                        row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
                        font: "bold 12pt sans-serif",
                        isMultiline: false, editable: true
                    },
                    new go.Binding("text", "name").makeTwoWay()),
                // properties
                $(go.TextBlock, "Properties",
                    { row: 1, font: "italic 10pt sans-serif" },
                    new go.Binding("visible", "visible", v => !v).ofObject("PROPERTIES")),
                $(go.Panel, "Vertical", { name: "PROPERTIES" },
                    new go.Binding("itemArray", "properties"),
                    {
                        row: 1, margin: 3, stretch: go.GraphObject.Fill,
                        defaultAlignment: go.Spot.Left, background: "lightyellow",
                        itemTemplate: propertyTemplate
                    }
                ),
                $("PanelExpanderButton", "PROPERTIES",
                    { row: 1, column: 1, alignment: go.Spot.TopRight, visible: false },
                    new go.Binding("visible", "properties", arr => arr.length > 0)),
                // methods
                $(go.TextBlock, "Methods",
                    { row: 2, font: "italic 10pt sans-serif" },
                    new go.Binding("visible", "visible", v => !v).ofObject("METHODS")),
                $(go.Panel, "Vertical", { name: "METHODS" },
                    new go.Binding("itemArray", "methods"),
                    {
                        row: 2, margin: 3, stretch: go.GraphObject.Fill,
                        defaultAlignment: go.Spot.Left, background: "lightyellow",
                        itemTemplate: methodTemplate
                    }
                ),
                $("PanelExpanderButton", "METHODS",
                    { row: 2, column: 1, alignment: go.Spot.TopRight, visible: false },
                    new go.Binding("visible", "methods", arr => arr.length > 0))
            )
        );

    function convertIsTreeLink(r) {
        return r === "generalization";
    }

    function convertFromArrow(r) {
        switch (r) {
            case "generalization": return "";
            default: return "";
        }
    }

    function convertToArrow(r) {
        switch (r) {
            case "generalization": return "Triangle";
            case "aggregation": return "StretchedDiamond";
            default: return "";
        }
    }
    /*var linkdata = [
        { from: 1, to: 11, relationship: "generalization" },
       // { from: 13, to: 11, relationship: "generalization" },
       // { from: 14, to: 13, relationship: "aggregation" }
      ];
    const strr2 = '[{"key":1, "name" : "BankAccount", "properties" :[{"name": "owner", "type": "String", "visibility":"public" }, {"name": "balance", "type": "Currency", "visibility":"public" }], "methods":[{"name": "deposit","parameters":[{"name":"amount","type":"Currency"}], "visibility":"public" }, {"name": "withdraw","parameters":[{"name":"amount","type":"Currency"}], "visibility":"public" }]}, {"key":11, "name" : "Person", "properties" :[{"name": "name", "type": "String", "visibility":"public" }, {"name": "birth", "type": "Date", "visibility":"protected" }], "methods":[{"name": "getCurrentAge","parameters":[{"name":"b","type":"Currency"}], "visibility":"public" }]}]';
    let strr =  strr2.split(" ").join(""); 
    var nodedata = JSON.parse(strr);*/

    diagram.linkTemplate =
        $(go.Link,
            { routing: go.Link.Orthogonal },
            new go.Binding("isLayoutPositioned", "relationship", convertIsTreeLink),
            $(go.Shape),
            $(go.Shape, { scale: 1.3, fill: "white" },
                new go.Binding("fromArrow", "relationship", convertFromArrow)),
            $(go.Shape, { scale: 1.3, fill: "white" },
                new go.Binding("toArrow", "relationship", convertToArrow))
        );

       
    return diagram;
}

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */
/*function handleModelChange(changes) {
    alert('GoJS model changed!');
}*/

// render function...
function DiagramClass() {


    return (
      /*  <div className='DiagramClass' >
            <button onClick={initDiagram}>render</button>
            <div id="myDiagramDiv"></div>
        </div>*/
  
          <ReactDiagram
                initDiagram={initDiagram}
                divClassName='diagram-component'
                nodeDataArray={[
                    {
                      key: 1,
                      name: "BankAccount",
                      properties: [
                        { name: "owner", type: "String", visibility: "public" },
                        { name: "balance", type: "Currency", visibility: "public", default: "0" }
                      ],
                      methods: [
                        { name: "deposit", parameters: [{ name: "amount", type: "Currency" }], visibility: "public" },
                        { name: "withdraw", parameters: [{ name: "amount", type: "Currency" }], visibility: "public" }
                      ]
                    },
                    {
                      key: 11,
                      name: "Person",
                      properties: [
                        { name: "name", type: "String", visibility: "public" },
                        { name: "birth", type: "Date", visibility: "protected" }
                      ],
                      methods: [
                        { name: "getCurrentAge", type: "int", visibility: "public" }
                      ]
                    },
                    {
                      key: 12,
                      name: "Student",
                      properties: [
                        { name: "classes", type: "List", visibility: "public" }
                      ],
                      methods: [
                        { name: "attend", parameters: [{ name: "class", type: "Course" }], visibility: "private" },
                        { name: "sleep", visibility: "private" }
                      ]
                    },
                    {
                      key: 13,
                      name: "Professor",
                      properties: [
                        { name: "classes", type: "List", visibility: "public" }
                      ],
                      methods: [
                        { name: "teach", parameters: [{ name: "class", type: "Course" }], visibility: "private" }
                      ]
                    },
                    {
                      key: 14,
                      name: "Course",
                      properties: [
                        { name: "name", type: "String", visibility: "public" },
                        { name: "description", type: "String", visibility: "public" },
                        { name: "professor", type: "Professor", visibility: "public" },
                        { name: "location", type: "String", visibility: "public" },
                        { name: "times", type: "List", visibility: "public" },
                        { name: "prerequisites", type: "List", visibility: "public" },
                        { name: "students", type: "List", visibility: "public" }
                      ]
                    }
                  ]}
                linkDataArray={[
                    { from: 1, to: 11, relationship: "generalization" }
                ]}
                onModelChange={()=>{}}
        />
    );
}

export default DiagramClass;