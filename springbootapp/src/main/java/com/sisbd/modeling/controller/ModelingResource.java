package com.sisbd.modeling.controller;

import com.sisbd.modeling.model.Class;
import com.sisbd.modeling.model.Module;
import com.sisbd.modeling.service.ModelingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ModelingResource {

    private final ModelingService modelingService;

    public ModelingResource(ModelingService employeeService) {
        this.modelingService = employeeService;
    }


    @PostMapping(path="/getdata",produces = {MediaType.APPLICATION_XML_VALUE} )
    public ResponseEntity<Class> getdatafromReact(@RequestBody Class classr) {
        Class employees = modelingService.saveClass(classr);
        System.out.println(classr.toString());
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @PostMapping(path="/addmodule",produces = {MediaType.APPLICATION_XML_VALUE} )
    public ResponseEntity<Module> setModule(@RequestBody Module module) {
        Module employees = modelingService.saveModule(module);
        System.out.println(module.toString());
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
}
