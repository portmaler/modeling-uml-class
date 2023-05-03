package com.sisbd.modeling.controller;

import com.sisbd.modeling.dto.LinkRequestDTO;
import com.sisbd.modeling.dto.ModuleDTO;
import com.sisbd.modeling.model.Class;
import com.sisbd.modeling.model.Link;
import com.sisbd.modeling.model.Module;
import com.sisbd.modeling.model.Package;
import com.sisbd.modeling.service.ModelingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ModelingResource {
    @Autowired
    private final ModelingService modelingService;

    public ModelingResource(ModelingService employeeService) {
        this.modelingService = employeeService;
    }




    @GetMapping("/getclassumlll" )
    public String getclassUmlo(@RequestParam Long id) {
        String res = modelingService.getClassByPsckage(id);
        System.out.println(res);
        return "new ResponseEntity<>(, HttpStatus.OK";
    }

    @GetMapping(value ="/getclassuml/{id}" )
    public String getclassUml(@PathVariable Long id) {
        String res = modelingService.getClassByPsckage(id);

        return res;
    }

  @GetMapping("/getallmodules")
    public  List<ModuleDTO> getAllModules() {
       List<ModuleDTO> modules = modelingService.getAllModules();
        return modules;
    }

    @GetMapping("/getallpackages/{id}")
    public  List<Package> getAllPackageByModule(@PathVariable Long id) {
        List<Package> packages = modelingService.getAllPackagesByModule(id);
        return packages;
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

   @PostMapping("/addlink")
    public ResponseEntity<Module> addLinkToModule(@RequestBody LinkRequestDTO linkRequestDTO) {
        System.out.println( linkRequestDTO.toString());
        Module updatedModule = modelingService.addLinkToModule( linkRequestDTO);
        return ResponseEntity.ok(updatedModule);
    }

    /*@PostMapping(path="/addlink/{id}",produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Module> addLinkToModule(@PathVariable Long id,@RequestBody Link linkRequestDTO) {
        System.out.println( linkRequestDTO.toString());
        Module updatedModule = modelingService.addLinkToModule(id, linkRequestDTO);
        return ResponseEntity.ok(updatedModule);
    }*/


}
