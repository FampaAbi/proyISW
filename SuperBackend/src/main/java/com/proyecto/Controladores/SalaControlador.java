package com.proyecto.Controladores;

import java.util.List;

import com.proyecto.Controladores.util.SalaRequest;
import com.proyecto.Modelos.Sala;
import com.proyecto.Servicios.ServicioSala;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "*")
public class SalaControlador {
    
    @Autowired
    ServicioSala servicioSa;

    @GetMapping(value="/verTodos")
    public List<Sala> verSalas(){
        return servicioSa.buscarTodos();
    }

}