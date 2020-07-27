package com.proyecto.Servicios;

import java.util.List;

import com.proyecto.Controladores.util.SalaRequest;
import com.proyecto.Modelos.Sala;
import com.proyecto.Repositorios.SalaRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicioSala {
    
    @Autowired
    SalaRepo repositorio;

    public Sala buscar(long id){
        return repositorio.findById(id);
    }

    public List<Sala> buscarTodos(){
        return repositorio.findAll();
    }

}