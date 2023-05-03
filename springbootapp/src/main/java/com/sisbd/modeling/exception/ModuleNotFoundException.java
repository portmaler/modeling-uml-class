package com.sisbd.modeling.exception;

public class ModuleNotFoundException extends RuntimeException {
    public ModuleNotFoundException(Long id) {
        super("Could not find module " + id);
    }


}