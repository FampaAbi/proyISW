package com.proyecto.Servicios;

import java.util.List;

import com.proyecto.Controladores.util.CamaRequest;
import com.proyecto.Modelos.Cama;
import com.proyecto.Repositorios.CamaRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicioCama {
    
    @Autowired
    CamaRepo repositorio;

    public Cama buscar(long id){
        return repositorio.findById(id);
    }

    public List<Cama> buscarTodos(){
        return repositorio.findAll();
    }

}