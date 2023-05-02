package com.sisbd.modeling.service;

import com.sisbd.modeling.dto.ModuleDTO;
import com.sisbd.modeling.model.Class;
import com.sisbd.modeling.model.Module;
import com.sisbd.modeling.model.Package;
import com.sisbd.modeling.repository.ClassRepo;
import com.sisbd.modeling.repository.ModuleRepo;
import com.sisbd.modeling.repository.PackageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ModelingService {

    @Autowired
    private ClassRepo classRepo;
    @Autowired
    private ModuleRepo moduleRepo;
    @Autowired
    private PackageRepo packageRepo;


    public ModelingService(ClassRepo classRepo, ModuleRepo moduleRepo, PackageRepo packageRepo) {
        this.classRepo = classRepo;
        this.moduleRepo = moduleRepo;
        this.packageRepo = packageRepo;
    }

    public Class saveClass(Class class1){
        return classRepo.save(class1);
    }
    public Module saveModule(Module module){
        return moduleRepo.save(module);
    }

    public String getClassByPsckage(Long id){
        List<Class> classes = new ArrayList<>();
        Optional<Package> optionalPackage = packageRepo.findById(id);
        if (optionalPackage.isPresent()) {
            Package p = optionalPackage.get();
            classes.addAll(p.getClasses());
            StringBuilder sb = new StringBuilder();
            for(Class c :  classes){
                sb.append(c.toString());
            }
            return sb.toString();
        } else {

           // throw new RuntimeException("Package not found: " + id);
            return "nothing found";
        }

    }

    public List<ModuleDTO> getAllModules() {
        List<Module> modules = moduleRepo.findAll();
        List<ModuleDTO> dtos = modules.stream()
                .map(ModuleDTO::toDto)
                .collect(Collectors.toList());
        return dtos;
    }

}
