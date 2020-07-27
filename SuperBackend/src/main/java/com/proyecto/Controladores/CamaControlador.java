package com.proyecto.Controladores;

import java.util.List;

import com.proyecto.Controladores.util.CamaRequest;
import com.proyecto.Modelos.Cama;
import com.proyecto.Servicios.ServicioCama;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "*")
public class CamaControlador {
    
    @Autowired
    ServicioCama servicioCa;

    @GetMapping(value="/verTodos")
    public List<Cama> verCama(){
        return servicioCa.buscarTodos();
    }
}