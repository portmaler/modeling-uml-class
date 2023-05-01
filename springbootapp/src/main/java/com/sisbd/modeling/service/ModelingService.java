package com.sisbd.modeling.service;

import com.sisbd.modeling.model.Class;
import com.sisbd.modeling.model.Module;
import com.sisbd.modeling.repository.ClassRepo;
import com.sisbd.modeling.repository.ModuleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModelingService {

    @Autowired
    private ClassRepo classRepo;
    @Autowired
    private ModuleRepo moduleRepo;

    public ModelingService(ClassRepo classRepo, ModuleRepo moduleRepo) {
        this.classRepo = classRepo;
        this.moduleRepo = moduleRepo;
    }

    public Class saveClass(Class class1){
        return classRepo.save(class1);
    }
    public Module saveModule(Module module){
        return moduleRepo.save(module);
    }
}
