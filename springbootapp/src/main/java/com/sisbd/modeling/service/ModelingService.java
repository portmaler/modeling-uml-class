package com.sisbd.modeling.service;

import com.sisbd.modeling.dto.LinkRequestDTO;
import com.sisbd.modeling.dto.ModuleDTO;
import com.sisbd.modeling.exception.ModuleNotFoundException;
import com.sisbd.modeling.model.*;
import com.sisbd.modeling.model.Class;
import com.sisbd.modeling.model.Module;
import com.sisbd.modeling.model.Package;
import com.sisbd.modeling.repository.ClassRepo;
import com.sisbd.modeling.repository.LinkRepo;
import com.sisbd.modeling.repository.ModuleRepo;
import com.sisbd.modeling.repository.PackageRepo;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class ModelingService {

    @Autowired
    private ClassRepo classRepo;
    @Autowired
    private ModuleRepo moduleRepo;
    @Autowired
    private PackageRepo packageRepo;
    @Autowired
    private LinkRepo linkRepo;


  /*  public ModelingService(ClassRepo classRepo, ModuleRepo moduleRepo, PackageRepo packageRepo) {
        this.classRepo = classRepo;
        this.moduleRepo = moduleRepo;
        this.packageRepo = packageRepo;
    }*/


    public Module saveModule(Module module){
        return moduleRepo.save(module);
    }

    /*public Module addLinkToModule(LinkRequestDTO linkRequestDTO) {
        Long idModule = linkRequestDTO.getIdModule();
        Optional<Module> optionalModule = moduleRepo.findById(idModule);
        if (optionalModule.isPresent()) {
            Module module = optionalModule.get();
            Link link = new Link(linkRequestDTO.getSource(),linkRequestDTO.getCible(),linkRequestDTO.getAssociationType(),linkRequestDTO.getMultiplicitySource(),linkRequestDTO.getMultiplicityCible());
               //     LinkRequestDTO.toLink(linkRequestDTO);
            module.getLinks().add(link);

            moduleRepo.save(module);
           // linkRepo.save(link);
            return module;
        } else {
            throw new ModuleNotFoundException(idModule);
        }
    }*/
    public Module addPackagetoModule(Long id, Package pack) {
        Optional<Module> optionalModule = moduleRepo.findById(id);
        if (optionalModule.isPresent()) {
            Module module = optionalModule.get();
            module.getPackages().add(pack);
//linkRepo.save(new Link(1L,2L,"dd","fef","fe"));
            moduleRepo.save(module);
            // linkRepo.save(link);
            return module;
        } else {
            throw new ModuleNotFoundException(id);
        }
    }

    public Package addClasstoModule(Long id, Class classs) {
        Optional<Package> optionalPackage = packageRepo.findById(id);
        if (optionalPackage.isPresent()) {
            Package pack = optionalPackage.get();
            pack.getClasses().add(classs);
//linkRepo.save(new Link(1L,2L,"dd","fef","fe"));
            packageRepo.save(pack);
            // linkRepo.save(link);
            return pack;
        } else {
            throw new ModuleNotFoundException(id);
        }
    }

    public Package addInterfacetoModule(Long id, Interface interf) {
        Optional<Package> optionalPackage = packageRepo.findById(id);
        if (optionalPackage.isPresent()) {
            Package pack = optionalPackage.get();
            pack.getInterfaces().add(interf);
//linkRepo.save(new Link(1L,2L,"dd","fef","fe"));
            packageRepo.save(pack);
            // linkRepo.save(link);
            return pack;
        } else {
            throw new ModuleNotFoundException(id);
        }
    }

    public Module addLinkToModule(Long id, Link link) {

        Optional<Module> optionalModule = moduleRepo.findById(id);
        if (optionalModule.isPresent()) {
            Module module = optionalModule.get();
            module.getLinks().add(link);
//linkRepo.save(new Link(1L,2L,"dd","fef","fe"));
          moduleRepo.save(module);
            // linkRepo.save(link);
            return module;
        } else {
            throw new ModuleNotFoundException(id);
        }
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

    public List<Package> getAllPackagesByModule(Long moduleId) {
        Optional<Module> optionalModule = moduleRepo.findById(moduleId);
        if (optionalModule.isPresent()) {
            Module module = optionalModule.get();
            List<Package> packages = module.getPackages();
            return packages;
        } else {
            throw new EntityNotFoundException("Module not found");
        }
    }


    public Module getModuleById(Long id) {
        Optional<Module> optionalModule = moduleRepo.findById(id);
        if (optionalModule.isPresent()) {
            return optionalModule.get();
        } else {
            throw new ModuleNotFoundException(id);
        }
    }
}
