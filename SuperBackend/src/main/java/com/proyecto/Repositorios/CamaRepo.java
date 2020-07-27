package com.proyecto.Repositorios;

import java.util.List;

import com.proyecto.Modelos.Cama;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CamaRepo extends JpaRepository<Cama,Long>{
    
    Cama findById(long id);

    List<Cama> findAll();

}