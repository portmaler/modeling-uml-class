package com.sisbd.modeling.service;

import com.sisbd.modeling.model.Class;
import com.sisbd.modeling.repository.ClassRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModelingService {

    @Autowired
    private ClassRepo classRepo;

    public ModelingService(ClassRepo classRepo) {
        this.classRepo = classRepo;
    }

    public Class saveClass(Class class1){
        return classRepo.save(class1);
    }
}
